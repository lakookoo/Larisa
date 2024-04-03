// Find the “Balance index” of an array of integers
// Index i is the balance index of the array when the condition is fulfilled 

// sumleft(i) = sumright(i+1)
// Sum of values for the elements with index <= i equals to sum of values for the elements with index > i

// Example [1,2,3,6] => 2  Index of the element with value 3 is 2. Balance index is 2

// If no balanced index found return -1

// [1,2,3,4,5,5]
// [4,4,2,6,8,8]
// [1,3,5,7,1,1]

function balanceIndex(arr){
    if(!arr) return -1;
    if(arr.length <= 1) return -1;
    let init = 0;
    let totalSum = arr.reduce((acc, cur) => acc + cur, init);
    let leftSum = 0;
    for(let i = 0; i < arr.length; i++){
        if(leftSum === totalSum - leftSum){
            return i
        }
        leftSum +=arr[i]
    }
    
    return -1;// or -1
}

