const { getBalancedIndex } = require('../../arrays/balancedIndex')

test('function getBalancedIndex exists', () => {
    expect(typeof getBalancedIndex).toEqual('function');
});

test('getBalancedIndex accepts an array and returns balanced index', () => {
    const arr = [1,2,3,4,5,5];
    const actualIndex = getBalancedIndex(arr);
    
    expect(actualIndex).toEqual(3);
});

test('getBalancedIndex accepts an array with no balanced index and returns -1', () => {
    const arr = [1,2,3,4,5];
    const actualIndex = getBalancedIndex(arr);
    
    expect(actualIndex).toEqual(-1);
});

test('getBalancedIndex accepts an mpty array and returns -1', () => {
    const arr = [];
    const actualIndex = getBalancedIndex(arr);
    
    expect(actualIndex).toEqual(-1);
});