// Given a string str made of alphabetical letters only, 
// create a function that returns the length 
// of the longest substring without repeating characters.

// Example 1:
// Input: str = "abcdbeghef"
// Output: 6
// Explanation: the longest substring without repeating characters is "cdbegh", its length is 6

// Example 2:
// Input: str = "aaaaa"
// Output: 1
// Explanation: the longest substring without repeating characters is "a", its length is 1

// Example 3:
// Input: str = "eddy"
// Output: 2
// Explanation: the longest substring without repeating characters is "ed" (or "dy"), its length is 2

function longestSubstringWithoutRepeating(str){
    let maxLength = 0;// to store the length of the longest string
    let start = 0;// start index of the current substring
    let indexes = {}

    for (let i = 0; i < str.length; i ++){
        let el = str[i]
        if(indexes[el] !== undefined && indexes[el] >=start){
            start = indexes[el] + 1;
        }
        indexes[el] = i;
        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength;
}