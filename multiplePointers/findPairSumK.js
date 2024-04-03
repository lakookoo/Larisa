// Multiple pointers
// Given an array of integers arr and an integer k, 
// create a boolean function that checks 
// if there exist two elements in arr such that we get k 
// when we add them together.

// Example 1:
// Input: arr = [4, 5, 1, -3, 6], k = 11
// Output: true
// Explanation: 5 + 6 is equal to 11

// Example 2:
// Input: arr = [4, 5, 1, -3, 6], k = -2
// Output: true
// Explanation: 1 + (-3) is equal to -2

// Example 3:
// Input: arr = [4, 5, 1, -3, 6], k = 8
// Output: false
// Explanation: there is no pair that sums up to 8

// By checking all pairs (brute force solution):

// Time complexity: O(n²)
// Space complexity: O(1)

function findPair(arr, k){
    for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
        if(arr[i] + arr[j] == k) return true;
      }
    }
    return false;
  }

  function findPair2(arr, k){
    arr = arr.sort((a,b) => a - b);
    let start = 0;
    let end = arr.length - 1;
  
     while (start < end) {
        let sum = arr[start] + arr[end];
        if (k === sum) {
            return true
        } else if (k > sum) {
            start++
        } else {
            end--
        }
    }
    return false;
}
  