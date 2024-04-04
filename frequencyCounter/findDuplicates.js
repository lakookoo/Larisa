// Given an array of integers arr that contains n+1 elements 
// between 1 and n inclusive, create a function that returns 
// the duplicate element (the element that appears more 
// than once). Assume that:
// - There is only one duplicate number
// - The duplicate number can be repeated more than once

// Example 1:
// Input: arr = [4, 2, 1, 3, 1]
// Output: 1

// Example 2:
// Input: arr = [1, 4, 2, 2, 5, 2]
// Output: 2

function findDuplicate(arr){
    let seen = {}
    for (let el of arr){
        if(seen[el]) return el;
        else seen[el] = 1
    }
  }