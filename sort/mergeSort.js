function mergeSort(arr){
    if(arr.length === 0 || arr.length === 1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let arr1 = mergeSort(arr.slice(0, middle))
    let arr2 = mergeSort(arr.slice(middle))
    return merge(arr1, arr2)
}

function merge(arr1, arr2){
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
            if(arr1[i] < arr2[j]){
                sortedArr.push(arr1[i])
                i++
            } else {
                sortedArr.push(arr2[j])
                j++

        }
    }
    while (i < arr1.length){
        sortedArr.push(arr1[i]);
        i++
    }
    while (j < arr2.length){
        sortedArr.push(arr1[j]);
        j++
    }
    
    return sortedArr;
}