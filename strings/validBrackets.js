// Given a string str made of 3 types of brackets only (){}[], 
// create a function that checks if the string is valid. 
// The string is considered as valid if all opening brackets are closed 
// with the same type of brackets, and in the correct order.

// Example 1:
// Input: str = "{()}"
// Output: true

// Example 2:
// Input: str = "{(})"
// Output: false

// Example 3:
// Input: str = "[}"
// Output: false

function isValid(str){
    let bracketsMap = {'(': ')', '{': '}',  '[': ']'};
    let openingBrackets = ['(', '{', '['];
    let stack = [];
    for (let br of str){
        if(openingBrackets.includes(br)){
            stack.push(br);
        } else if(stack.length > 0 && br == bracketsMap[stack[stack.length-1]]) {
            stack.pop();
        } else {
            return false;
        }
    
    }
    return stack.length == 0;
}