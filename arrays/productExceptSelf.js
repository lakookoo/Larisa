// Given an array of integers arr that has at least two elements, create a function
// that returns an array output where output[i] represents 
// the product of all elements of arr except arr[i], 
// and you are not allowed to use the division operator.

// Example 1:
// Input: arr = [2, 5, 3, 4]
// Output: [60, 24, 40, 30]
// Explanation: output[0] = 5*3*4 = 60, output[1] = 2*3*4 = 24, output[2] = 2*5*4 = 40, output[3] = 2*5*3 = 30

function productExceptSelf(arr){
    let output=[]
    for(let i = 0; i < arr.length; i++){
        let product = 1;
        for(let j = 0; j < arr.length; j++){
            if( i==j ) continue;
            else product *= arr[j]
        }
        output.push(product)
    }
    return product
}