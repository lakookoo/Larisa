function chunk(arr, size){
    const chunked = [];
    for (let el of arr) {
        const last = chunked[chunked.length - 1];
        if(!last || last.length === size) {
            chunked.push([el])
        } else {
            last.push(el)
        }
    }
    return chunked;
}

function chunk2(arr, size){
    const chunked = [];
    let index = 0;

    while (index < arr.length){
        chunked.push(arr.slice(index, index+size))
        index += size;

    }
    return chunked;
}