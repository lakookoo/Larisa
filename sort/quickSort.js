function quickSort(arr, left = 0, rigth = arr.length - 1){
    if (left < rigth) {
        let pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, rigth)
    }
    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1){
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1 ; i <= end; i++) {
        if (pivot > arr[i]){
            swapIdx++;
            let temp = arr[i];
            arr[i] = arr[swapIdx];
            arr[swapIdx] = temp;
        }

    }
    let temp = swapIdx
    swapIdx = start;
    start = temp;
    return swapIdx;
}