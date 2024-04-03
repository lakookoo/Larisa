
// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
function sameFrequency(num1, num2){
    // str num1 and num2
    strNum1 = num1.toString()
    strNum2 = num2.toString()
    // check if they have the same length
    if (strNum1.length !== strNum2.length) {
        return false
    }
    // new obj to count occurency of each digit in the first number
    let lookup = {}
    // and fill it up in a for loop
    for (let i = 0; i < strNum1.length; i++){
        let digit = strNum1[i]
        if ( digit in lookup) {
            lookup[digit] += 1
        } else {
            lookup[digit] = 1
        }
    }
    // for loop to check if the digit from the object is in num2
    for (let i = 0; i < strNum2.length; i++){
        let digit = strNum2[i]
        if (lookup[digit]) {
            lookup[digit] -= 1
        } else {
            return false
        }
    }
    return true
}