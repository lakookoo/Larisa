// Given two strings str1 and str2, create a function that returns 
// the first index where we can find str2 in str1. If we cannot find str2
// in str1, the function must return -1.
// Try to solve the problem without using the built-in .indexOf() method.

// Example 1:
// Input: str1 = "inside", str2 = "side"
// Output: 2
// Explanation: we can find "side" in "inside" by starting from the index 2

// Example 2:
// Input: str1 = "inside", str2 = "in"
// Output: 0
// Explanation: we can find "in" in "inside" by starting from the index 0

// Example 3:
// Input: str1 = "inside", str2 = "code"
// Output: -1
// Explanation: we can't find "code" in "inside"



function findSubstring(main, substr) {
    // Iterate through maIN STRING
    for (let i = 0; i <= main.length - substr.length; i++) {
        let found = true;
        // Check if substring matches the substring starting from index i of main
        for (let j = 0; j < substr.length; j++) {
            if (main[i + j] !== substr[j]) {
                found = false;
                break;
            }
        }
        // If substring matches, return the index i
        if (found) {
            return i;
        }
    }
    // If substring is not found in main, return -1
    return -1;
}

// Test cases
console.log(findSubstring("inside", "side")); // Output: 2
console.log(findSubstring("inside", "in"));   // Output: 0
console.log(findSubstring("inside", "code")); // Output: -1