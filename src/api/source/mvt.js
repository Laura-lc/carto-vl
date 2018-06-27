import * as rsys from '../../client/rsys';
import Dataframe from '../../core/dataframe';
import * as Protobuf from 'pbf';
import { VectorTile } from '@mapbox/vector-tile';
import { decodeLines, decodePolygons } from '../../client/mvt/feature-decoder';
import TileClient from './TileClient';
import Base from './base';
import { RTT_WIDTH } from '../../core/renderer';
import Metadata from '../../core/metadata';

// Constants for '@mapbox/vector-tile' geometry types, from https://github.com/mapbox/vector-tile-js/blob/v1.3.0/lib/vectortilefeature.js#L39
// const mvtDecoderGeomTypes = { point: 1, line: 2, polygon: 3 };

const geometryTypes = {
    UNKNOWN: 'unknown',
    POINT: 'point',
    LINE: 'line',
    POLYGON: 'polygon'
};

export default class MVT extends Base {

    /**
     * Create a carto.source.MVT.
     *
     * @param {object} data - A MVT data object
     * @param {object} metadata - A carto.source.mvt.Metadata object
     *
     * @example
     * const metadata = new carto.source.mvt.Metadata([{ type: 'number', name: 'total_pop'}])
     * new carto.source.MVT("https://{server}/{z}/{x}/{y}.mvt", metadata);
     *
     * @fires CartoError
     *
     * @constructor MVT
     * @extends carto.source.Base
     * @memberof carto.source
     * @IGNOREapi
     */
    constructor(templateURL, metadata = new Metadata()) {
        super();
        this._templateURL = templateURL;
        this._metadata = metadata;
        this._tileClient = new TileClient(templateURL);
    }

    _clone() {
        return new MVT(this._templateURL, JSON.parse(JSON.stringify(this._metadata)));
    }

    bindLayer(addDataframe, dataLoadedCallback) {
        this._tileClient.bindLayer(addDataframe, dataLoadedCallback);
    }

    async requestMetadata() {
        return this._metadata;
    }

    requestData(viewport) {
        return this._tileClient.requestData(viewport, this.responseToDataframeTransformer.bind(this));
    }

    async responseToDataframeTransformer(response, x, y, z) {
        const MVT_EXTENT = 4096;
        const arrayBuffer = await response.arrayBuffer();
        if (arrayBuffer.byteLength == 0 || response == 'null') {
            return { empty: true };
        }
        const tile = new VectorTile(new Protobuf(arrayBuffer));
        const mvtLayer = tile.layers[Object.keys(tile.layers)[0]];
        const { geometries, properties } = this._decodeMVTLayer(mvtLayer, this._metadata, MVT_EXTENT);
        const rs = rsys.getRsysFromTile(x, y, z);
        const dataframe = this._generateDataFrame(rs, geometries, properties, mvtLayer.length, this._metadata.geomType);

        return dataframe;
    }


    _decodeMVTLayer(mvtLayer, metadata, mvt_extent) {
        switch (metadata.geomType) {
            case geometryTypes.POINT:
                return this._decode(mvtLayer, metadata, mvt_extent);
            case geometryTypes.LINE:
                return this._decode(mvtLayer, metadata, mvt_extent, decodeLines);
            case geometryTypes.POLYGON:
                return this._decode(mvtLayer, metadata, mvt_extent, decodePolygons);
            default:
                throw new Error('MVT: invalid geometry type');
        }
    }

    _decode(mvtLayer, metadata, mvt_extent, decodeFn) {
        const { properties, propertyNames } = this._getPropertyNames(metadata, mvtLayer.length);
        const geometries = decodeFn ? [] : new Float32Array(mvtLayer.length * 2);

        for (let i = 0; i < mvtLayer.length; i++) {
            const f = mvtLayer.feature(i);
            const geom = f.loadGeometry();
            if (decodeFn) {
                const decodedPolygons = decodeFn(geom, mvt_extent);
                geometries.push(decodedPolygons);
            }
            else {
                geometries[2 * i + 0] = 2 * (geom[0][0].x) / mvt_extent - 1.;
                geometries[2 * i + 1] = 2 * (1. - (geom[0][0].y) / mvt_extent) - 1.;
            }
            this._decodeProperties(propertyNames, properties, f, i);
        }

        return { properties, geometries };
    }

    _getPropertyNames(metadata, length) {
        const properties = {};
        const propertyNames = Object.keys(metadata.properties)
            .filter(propertyName => metadata.properties[propertyName].type !== 'geometry')
            .map(propertyName => metadata.properties[propertyName].sourceName || propertyName);

        propertyNames.forEach(propertyName => properties[propertyName] = new Float32Array(length + RTT_WIDTH));

        return { properties, propertyNames };
    }

    _decodeProperties(propertyNames, properties, feature, i) {
        propertyNames.forEach(propertyName => {
            const propertyValue = feature.properties[propertyName];
            properties[propertyName][i] = this.decodeProperty(propertyName, propertyValue);
        });
    }

    decodeProperty(propertyName, propertyValue) {
        if (typeof propertyValue === 'string') {
            return this._metadata.categorizeString(propertyValue);
        } else if (typeof propertyValue === 'number') {
            return propertyValue;
        } else if (propertyValue == null || propertyValue == undefined) {
            return Number.NaN;
        } else {
            throw new Error(`MVT decoding error. Feature property value of type '${typeof propertyValue}' cannot be decoded.`);
        }
    }

    _generateDataFrame(rs, geometry, properties, size, type) {
        return new Dataframe({
            active: false,
            center: rs.center,
            geom: geometry,
            properties: properties,
            scale: rs.scale,
            size: size,
            type: type,
            metadata: this._metadata,
        });
    }

    free() {
        this._tileClient.free();
    }
}
