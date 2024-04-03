// capitalizeWords
// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
   
    if (arr.length === 1) {
        return [arr[0].toUpperCase()]
    }
    let res = capitalizeWords(arr.slice(0,-1));
    res.push(arr.slice(arr.length-1)[0].toUpperCase())
    return res;
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
  function capitalizeWords(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    newArr.push(arr[0].toUpperCase()); // Capitalize the first word and push it to newArr
    newArr = newArr.concat(capitalizeWords(arr.slice(1))); // Recursively capitalize the rest of the words
    return newArr;
}
