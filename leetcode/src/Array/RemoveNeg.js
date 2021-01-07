
// var x = [-3,5,1,3,2,10,-7];
// for (var i = x.length-1; i >= 0; i--){
//     if (x[i] < 0){
//         x.splice(i, 1);
//     }
// }
// console.log(x)

function ridiculousApproach(arr) {
    if (!arr) {
        return false;
    }
    var temp = [];
    var deleteArr = []
    for (var i = 0, len = arr.length; i < len; i++) {
        temp.push(arr[i]);
        if (arr[i] < 0) {
            deleteArr = temp.pop();
           temp.unshift(deleteArr)
        }
    }
    return temp
}
var x = [1, 5, -3, 3, -7, 10, 2];


console.log(ridiculousApproach(x));
