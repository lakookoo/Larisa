// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called 
//sortedFrequency that counts the occurrences of the number in the array


// sortedFrequency([1,1,2,2,2,2,3],2) // 4 
// sortedFrequency([1,1,2,2,2,2,3],3) // 1 
// sortedFrequency([1,1,2,2,2,2,3],1) // 2 
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

function sortedFrequency(arr, n){
    let start = 0;
    let end = arr.length - 1;
    let firstOccur = undefined;
    

    while(start <= end){
        let mid = Math.floor(end/2);
        if(arr[mid] == n)
            if (mid === 0 || arr[mid - 1] < n ) {
                firstOccur = mid;
                break;
            } else {
                end = mid - 1
            }
        else if (arr[mid] < n) {
            start = mid + 1
        } else {
            end = mid - 1
        }
        
    }
    if (firstOccur === undefined) {
        return -1;
    }

    let count = 0;
    for (let i = firstOccur; i < arr.length; i++){
        if (arr[i] === n){
            count++
        } else {
            break;
        }
    }
    return count 
    

    
}