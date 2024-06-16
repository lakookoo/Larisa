// Divide and Conquer - findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
// The function should return the index of the integer in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity - O(log n)

// Space Complexity - O(1)

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5

function findRotatedIndex(arr, number){
    let start = 0;
    let end = arr.length() - 1;

    while (start <= end ){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] === number) {
            return mid
        } 
        if ( arr[start] <= arr[mid]) {
            if (arr[start] <= number && number < arr[mid]) {
                end = arr[mid - 1];
            } else {
                start = mid + 1;
            }
        } else {
            if (arr[mid] < number && number <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        
    }
    return -1;
}