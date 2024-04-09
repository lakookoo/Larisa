// Given two strings str1 and str2, create a function 
// that returns the length of their longest common subsequence, 
// in other words, the subsequence that is present in both of them.

// Example 1:
// Input: str1 = "abdacbab", str2 = "acebfca"
// Output: 4
// Explanation: the length of the longest common subsequence 
// of str1 and str2 is 4, this one for example: "abca"

// Example 2:
// Input: str1 = "cbebaff", str2 = "aeddbggf"
// Output: 3
// Explanation: the length of the longest common subsequence 
// of str1 and str2 is 3, this one for example: "ebf"

// Example 3:
// Input: str1 = "abebafba", str2 = "cddghcd"
// Output: 0
// Explanation: the only common subsequence is "", 
// the empty string, its length is 0

function getLongestCommonSubstring(str1, str2, i = 0, j = 0) {
    if (i === str1.length || j === str2.length) {
        return 0;
    } else if (str1[i] === str2[j]) {
        return 1 + getLongestCommonSubstring(str1, str2, i + 1, j + 1);
    } else
        return Math.max(getLongestCommonSubstring(str1, str2, i + 1, j), getLongestCommonSubstring(str1, str2, i, j + 1));
}