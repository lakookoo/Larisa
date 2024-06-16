function bubbleSort(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b;
        }
    }

    for (let i = 0; i < arr.length; i++){
        for( let j = 0; j < arr.length - 1 - i; j++){
            if(comparator(arr[j], arr[j + 1]) > 0){
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}