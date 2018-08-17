import {
    validateDynamicTypeErrors,
    validateStaticType,
    validateStaticTypeErrors,
    validateCompileTypeError
} from './utils';

import {
    globalQuantiles,
    property,
    globalEqIntervals,
    viewportEqIntervals,
    viewportQuantiles
} from '../../../../../src/renderer/viz/expressions';

import Metadata from '../../../../../src/renderer/Metadata';

describe('src/renderer/viz/expressions/classifier', () => {
    describe('error control', () => {
        validateCompileTypeError('viewportQuantiles', []);
        validateCompileTypeError('viewportQuantiles', ['number', 'category']);
        validateCompileTypeError('viewportQuantiles', ['category', 2]);
        validateCompileTypeError('viewportQuantiles', ['color', 2]);
        validateCompileTypeError('viewportQuantiles', ['number', 'color']);

        validateCompileTypeError('viewportEqIntervals', []);
        validateCompileTypeError('viewportEqIntervals', ['number', 'category']);
        validateCompileTypeError('viewportEqIntervals', ['category', 2]);
        validateCompileTypeError('viewportEqIntervals', ['color', 2]);
        validateCompileTypeError('viewportEqIntervals', ['number', 'color']);

        validateStaticTypeErrors('globalQuantiles', []);
        validateStaticTypeErrors('globalQuantiles', ['number', 'category']);
        validateDynamicTypeErrors('globalQuantiles', ['category', 2]);
        validateStaticTypeErrors('globalQuantiles', ['color', 2]);
        validateStaticTypeErrors('globalQuantiles', ['number', 'color']);

        validateStaticTypeErrors('globalEqIntervals', []);
        validateStaticTypeErrors('globalEqIntervals', ['number', 'category']);
        validateDynamicTypeErrors('globalEqIntervals', ['category', 2]);
        validateStaticTypeErrors('globalEqIntervals', ['color', 2]);
        validateStaticTypeErrors('globalEqIntervals', ['number', 'color']);
    });

    describe('type', () => {
        validateStaticType('viewportQuantiles', ['number-property', 2], 'category');
    });

    describe('eval', () => {
        const $price = property('price');
        const METADATA = new Metadata({
            properties: {
                price: {
                    type: 'number',
                    min: 0,
                    max: 5
                }
            },
            sample: [{
                price: 0
            },
            {
                price: 1
            },
            {
                price: 2
            },
            {
                price: 3
            },
            {
                price: 4
            },
            {
                price: 5
            }
            ]
        });

        function prepare (expr) {
            expr._bindMetadata(METADATA);
            expr._resetViewportAgg(METADATA);
            expr.accumViewportAgg({
                price: 0
            });
            expr.accumViewportAgg({
                price: 1
            });

            expr.accumViewportAgg({
                price: 2
            });
            expr.accumViewportAgg({
                price: 3
            });

            expr.accumViewportAgg({
                price: 4
            });
            expr.accumViewportAgg({
                price: 5
            });
        }
        it('globalQuantiles($price, 2)', () => {
            const q = globalQuantiles($price, 2);
            prepare(q);
            expect(q.getBreakpointList()).toEqual([3]);
        });
        it('viewportQuantiles($price, 2)', () => {
            const q = viewportQuantiles($price, 2);
            prepare(q);
            expect(q.getBreakpointList()).toEqual([3]);
        });
        it('globalEqIntervals($price, 2)', () => {
            const q = globalEqIntervals($price, 2);
            prepare(q);
            expect(q.getBreakpointList()).toEqual([2.5]);
        });
        it('viewportEqIntervals($price, 2)', () => {
            const q = viewportEqIntervals($price, 2);
            prepare(q);
            expect(q.getBreakpointList()).toEqual([2.5]);
        });

        it('globalQuantiles($price, 3)', () => {
            const q = globalQuantiles($price, 3);
            prepare(q);
            expect(q.getBreakpointList()).toEqual([2, 4]);
        });
        it('viewportQuantiles($price, 3)', () => {
            const q = viewportQuantiles($price, 3);
            prepare(q);
            expect(q.getBreakpointList()).toEqual([2, 4]);
        });
        it('viewportEqIntervals($price, 3)', () => {
            const q = viewportEqIntervals($price, 3);
            prepare(q);
            expect(q.getBreakpointList()[0]).toBeCloseTo(5 / 3, 4);
            expect(q.getBreakpointList()[1]).toBeCloseTo(10 / 3, 4);
        });
    });
});
