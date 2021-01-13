const searchBigSortedArray = function (reader, target) {
    // write your code here

    let count = 1;
    //从第0位开始算
    while(reader[count - 1] < target){
        count  = count * 2
    }

    //Binary Search
    let start = count/2, end = count;
    while (start + 1 < end) {
        let mid = Math.floor((start + end) / 2);

        if(reader[mid] < target){
            start = mid;
        } else {
            end = mid
        }
    }

    if(reader[start] === target){
        return start;
    }
    if(reader[end] === target ){
        return end;
    }

    return -1;

    // return reader.indexOf(target)
}

console.log(searchBigSortedArray([1,3,6,9,21], 21))

