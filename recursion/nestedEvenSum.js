// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum 
// of all even numbers in an object which may contain nested objects.

function nestedEvenSum (obj) {
    // we need to go inside of the object and check if the value is an object or not
    // if it is an object - go inside
    // if it is not an object - check if it is a number
            // if it is not a number do nothing
            // if it is a number check if it is even
                // if it is not even - do nothing
                // if it is even sum it up 

    // which variables do we need ?
    let sum = 0
    for (let key in obj) {
        if ( obj[key] % 2 === 0 && typeof obj[key] === 'number') { sum = sum + obj[key]}
        if( typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key])
        }
    }
    return sum
}
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10