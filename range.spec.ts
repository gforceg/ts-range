import { range, arrSize } from './range'

describe('range', () => {

    test('it returns an array of numbers', () => {
        expect(range(2, 10, 2))
        .toEqual([2, 4, 6, 8])
        expect(range(0, 5))
        .toEqual([0, 1, 2, 3, 4])
    })

    test('it iterates', () => {
        const expected = [2, 4, 6, 8]
        for(let i of range(2, 10, 2)) {
            expect(i)
            .toBe(expected.shift())
        }
    })

    test('it accepts a single argument', () => {
        expect(range(5))
        .toEqual([0, 1, 2, 3, 4])
    })

    test('it returns an empty array when step is 0', () => {
        expect(range(1, 10, 0))
        .toEqual([])
    })

    test('it returns an empty array if things do not make sense', () => {
        expect(range(2, 1))
        .toEqual([])

        expect(range(0, 10, -1))
        .toEqual([])

        expect(range(-5))
        .toEqual([])
    })

    test('it can go backwards', () => {
        expect(range(1, -5, -1))
        .toEqual([1, 0, -1, -2, -3, -4])
    })

})
