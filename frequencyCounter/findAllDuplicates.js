// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once. 
// Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)

function findAllDuplicates(arr){
    let lookup = {};
    let duplicates = [];
    for(let el of arr){
        if(!(lookup[el])) {
            lookup[el] = 1;
        } else {
            lookup[el] += 1;
        }
    }

    for (let key in lookup){
        if(lookup[key] > 1){
            duplicates.push(Number(key));
        }
    }

    return duplicates;


}