// Given an array of integers arr, create a function that returns 
// all its possible permutations without duplicates, 
// the order doesn't matter.

// Example 1:
// Input: arr = [1, 2, 3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], 
// [3, 1, 2], [3, 2, 1]]

// Example 2:
// Input: arr = [1, 2, 2]
// Output: [[1, 2, 2], [2, 1, 2], [2, 2, 1]]

function getPermutations(arr){
    if(arr.length < 2){
        return [arr]
    } else {
        let permutations = [];
        for(let i = 0; i < arr.length; i++){
            if(!arr.slice(0,i).includes(arr[i])){
                let remainingElements = [...arr];
                remainingElements.splice(i, 1);
                let remainingPermutations = getPermutations(remainingElements);
                for(let permutation of remainingPermutations){
                    permutations.push(arr[i]);
                    permutations.push(permutation);
                }
            }
            return permutations;
        }
    }
}