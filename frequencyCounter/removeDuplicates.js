// Remove Duplicates

// Given an array of integers arr, create a function 
// that returns an array containing the values of arr 
// without duplicates (the order doesn't matter).

// Example 1:
// Input: arr = [4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1]
// Output: [4, 2, 5, 3, 1]

// Example 2:
// Input: arr = [1, 1, 1, 1, 1, 1, 1, 1]
// Output: [1]

// Example 3:
// Input: arr = [4, 4, 2, 3, 2, 2, 4, 3]
// Output: [4, 2, 3]

function removeDuplicates1(arr){
    let mySet = new Set(arr);
    return [...mySet]
}

function removeDuplicates(arr){
    let unique = {}
    for (el of arr){
        unique[el] = true
    }
    return Object.key(unique)
}