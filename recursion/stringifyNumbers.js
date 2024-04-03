// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object 
// and finds all of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers 
// converted to strings, and not modify the original. 
// Keep the original object unchanged.

function stringifyNumbers(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let strObj = {}
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            strObj[key] = obj[key].toString();
        } else if ( typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            strObj[key] = stringifyNumbers(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return strObj;

}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/