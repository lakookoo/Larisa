const { equal } = require('assert');
const { chunk1, chunk2 } = require("../../arrays/chunk");

function testChunks(chunk) {

    test('function chunk exists', () => {
        expect(typeof chunk).toEqual('function');
    });

    test('chunk divides an array of 5 elements with chunk size 3', () => {
        const arr = [1, 2, 3, 4, 5];
        const chunked = chunk(arr, 3);

        expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
    });

    test('chunk an array into subarrays of specified size', () => {
        const arr = [1, 2, 3, 4, 5];
        const chunked = chunk(arr, 2);
        const expected = [[1, 2], [3, 4], [5]];

        expect(chunked).toEqual(expected);
    });

    test('returns an empty arry when inpur array is empty', () => {
        const arr = [];
        const size = 2;

        expect(chunk(arr, size)).toEqual([]);
    });

    test('returns a single-element array when input array length is less than chunk size', () => {
        const arr = [1, 2, 3];
        const size = 5;
        const expected = [[1, 2, 3]];

        expect(chunk(arr, size)).toEqual(expected);
    });
}

describe('Testing chunk1', () => {
    testChunks(chunk1);
});

describe('Testing chunk2', () => {
    testChunks(chunk2);
});


