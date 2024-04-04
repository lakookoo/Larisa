// Frequency Counter

// Given a string str, create a function that returns 
// the first repeating character.
// If such character doesn't exist, return the null 
// character '\0'.

// Example 1:
// Input: str = "inside code"
// Output: 'i'

// Example 2:
// Input: str = "programming"
// Output: 'r'

// Example 3:
// Input: str = "abcd"
// Output: '\0'

// Example 4:
// Input: str = "abba"
// Output: 'b'

// Brute force solution:

// Time complexity: O(n²)
// Space complexity: O(1)

function firstRepeatingCharacter1(str){
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j < i; j++){
        if(str.charAt(i) == str.charAt(j))
          return str.charAt(i);
      }
    }
    return '\0';
}

function firstRepeatingCharacter(str){
    let seen = {}
    for(let char of str){
        if(seen[char]) {
            return char;
        } else {
            seen[char] = true;
        }
        
    }
    return '\0';
}
  
  