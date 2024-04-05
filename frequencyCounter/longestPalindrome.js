// Frequency Counter - Find the longest Palindrome

// Given a string str made of alphabetical letters only, create 
// a function that returns the length of the longest palindrome string 
// that can be made from letters of str

// Example 1:
// Input: str = "abbaba"
// Output: 5
// Explanation: one of the longest palindromes that can be made 
// is "baaab", its length is 5

// Example 2:
// Input: str = "abbaaa"
// Output: 6
// Explanation: one of the longest palindromes that can be made 
// is "baaaab", its length is 6

// Example 3:
// Input: str = "abbabab"
// Output: 7
// Explanation: one of the longest palindromes that can be made 
// is "bbaaabb", its length is 7

// Example 4:
// Input: str = "abdccdceeebebc"
// Output: 13
// Explanation: one of the longest palindromes that can be made 
// is "eedccbabccdee", its length is 13

function longestPalindrome(str) {
    let occurences = {}
    for (const letter of str) {
        if (occurences[letter] === undefined) {
            occurences[letter] = 1;
        } else {
            occurences[letter]++;
        }
    }
    let len = 0;
    for (const occu of Object.values(occurences)) {
        len += occu % 2 === 0 ? occu : occu - 1;
    }
    if (len < str.length) len++;
    return len;
}