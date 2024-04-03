// collectStrings
// Write a function called collectStrings which accepts an object 
// and returns an array of all the values in the object that have 
// a typeof string

function collectStrings(obj){
    // we go into the object and check what we have
    // if it is an object we call collectStrings on it
    // if it is not an object we check if it has s type string
    // if it is we push it to an array
    // newArr

    let strings = []
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            strings.push(obj[key])
        }
        if (typeof obj[key] === 'object') {
            strings = strings.concat(collectStrings(obj[key]));
        }
    }
    return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

