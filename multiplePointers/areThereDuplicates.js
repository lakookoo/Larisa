// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts 
// a variable number of arguments, and checks 
// whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern 
// OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates() {
    let lookup = {}
    for (let val in arguments) {
        if (val in lookup) {
            lookup[val] += 1
        } else {
            lookup[val] = 1
        }
    }
    for (let key in lookup) {
        if (lookup[key] >= 2) {
            return true
        } 
        return false
    }
}

function areThereDuplicates2(...args) {
    args.sort((a, b) => {
        if(a<b) return -1;
        if(a>b) return 1;
        return 0;
    })
    let start = 0;
    let next = 1;
    while(next < args.length) {
        if(args[start] === args[next]){
            return true
        } 
        start++;
        next++;
    }
    return false;

}

function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}