// Given an array arr of strictly positive integers, and an integer k,
// create a function that returns the number of subsets of arr 
// that sum up to k.

// Example 1:
// Input: arr = [1, 2, 3, 1], k = 4
// Output: 3
// Explanation: subsets that sum up to k 
// are [1, 2, 1], [1, 3], and [3, 1]

// Example 2:
// Input: arr = [1, 2, 3, 1, 4], k = 6
// Output: 4
// Explanation: subsets that sum up to k 
// are [1, 2, 3], [1, 1, 4], [2, 3, 1], and [2, 4]

// Example 3:
// Input: arr = [2, 4, 2, 6, 8], k = 7
// Output: 0
// Explanation: there are no subsets that sum up to k

function subsetSumUpToK(arr, k, i = 0, sum = 0){
    
    if(sum === k) 
            return 1;
        else if (sum > k || i >= arr.length)
            return 0;
        else 
            return subsetSumUpToK(arr, k, i + 1, sum + arr[i]) + subsetSumUpToK(arr, k, i + 1, sum)     
}