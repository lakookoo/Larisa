const { equal } = require('assert');
const { chunk1, chunk2 } = require('../../arrays/chunk.js');

function testChunks(chunk){
    test('chunk an array into subarrays of specified size', () => {
        const arr = [1, 2, 3, 4, 5];
        const size = 2;
        const expected = [[1, 2], [3, 4], [5]];
    
        expect(chunk(arr, size).toEqual(expected));
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

        expect(chunk(arr, size).toEqual(expected));
    });
}

describe('Testing chunk1', () => {
    testChunks(chunk1);
});

describe('Testing chunk2', () => {
    testChunks(chunk2);
});


