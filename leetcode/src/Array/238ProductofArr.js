/*
* Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
*
* */
var productExceptSelf = function(nums){
    //开一个数组[1,1,1,1]
    const result = Array(nums.length).fill(1);

    let product = 1;
    for(let i = 0; i < nums.length; i++){
        result[i] = result[i] * product;
        product = product * nums[i];
    }

    product = 1;
    for(let i = nums.length - 1; i >=0; i--){
        result[i] = result[i] * product;
        product = product * nums[i];
    }

    return result;
}

let arr = [1,2,3,4]
console.log(productExceptSelf(arr))
