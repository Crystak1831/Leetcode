/*var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;

        }
    }
    return nums.length;
};

let arr = [3,2,2,3];
console.log(removeElement(arr,2))*/


//方法2：
var removeElement = function(nums, val){
    while(nums.indexOf(val) != -1){
       nums.splice(nums.indexOf(val), 1);
    }

    return nums;
}
let arr = [3,2,2,3];
console.log(removeElement(arr,2))
