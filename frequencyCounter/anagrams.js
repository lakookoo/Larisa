// Coding Exercise - Anagrams
// Check to see if two provided strings are anagrams of each other. 
// One string is an anagram of another if it uses the same characters 
// in the same quantity.

// Only consider characters, not spaces or punctuation

// Consider capital letters to be the same as lower case

// Examples:

// anagrams('rail safety', 'fairy tales') === true
// anagrams('RAIL! SAFETY!', 'fairy tales') === true
// anagrams('Hi there', 'Bye there') === false

function anagrams(str1, str2){
    if (str1.length !== str2.length){
        return false
    }
    let seen = {}
    for (let char of str1){
        if(char in seen){
            seen[char] += 1
        } else {
            seen[char] = 1
        }
    }
    for (let char of str2){
        if(seen[char]){
            seen[char] -= 1
        } else {
            return false
        }
    }
    return true
}