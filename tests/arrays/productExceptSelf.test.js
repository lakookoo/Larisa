const { productExceptSelf } = require("../../arrays/productExceptSelf")

test('function  productExceptSelf exists', () => {
    expect(typeof productExceptSelf).toEqual('function');
});

test('productExceptSelf accepts an empty array and returns 0', () => {
    const product = productExceptSelf([])
    
    expect(product).toEqual([]);
});

test('productExceptSelf accepts an array and returns an array of products of array except arr[i]', () => {
    const product = productExceptSelf([2, 5, 3, 4])
    const expected = [60, 24, 40, 30]
    
    expect(product).toEqual(expected);
});

