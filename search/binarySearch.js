function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let middle = Math.round((right + left)/2);
        
        if (val === arr[middle]){
            return middle
        } else if (arr[middle] < val) {
            left = middle + 1
        } else if (arr[middle] > val) {
            right = middle - 1
        }
    }
    return -1;
}