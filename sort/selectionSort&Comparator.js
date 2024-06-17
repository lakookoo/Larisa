function selectionSort( arr, comparator){

    if (typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }

    for (let i = 0; i < arr.length; i++){
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++){
            if(comparator(arr[j], arr[minIndex]) < 0) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}