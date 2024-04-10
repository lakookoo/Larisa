const { countUniqueValues } = require('../../arrays/counUniqueVal');

test('function countUniqueValues exists', () => {
    expect(typeof countUniqueValues).toEqual('function');
});

test('countUniqueValues return 9 when all the numbers in array are different and arr.length === 9', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = countUniqueValues(arr);

    expect(result).toEqual(9);
});

test('countUniqueValues return 0 when arr.length === 0', () => {
    const arr = [];
    const result = countUniqueValues(arr);

    expect(result).toEqual(0);
});

test('countUniqueValues return 1 when all the elements of array are the same', () => {
    const arr = [2, 2, 2, 2, 2, 2];
    const result = countUniqueValues(arr);

    expect(result).toEqual(1);
});


