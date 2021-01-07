/*
* Given an unsorted integer array nums, find the smallest missing positive integer.

Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?



Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
* */
//解法一：
/*var firstMissingPositive = function(nums) {
    let result = 1;
    while(nums.includes(result)){
        result++
    }
    return result
};*/

//解法二：用数组作为hashmap，因为有n个数存到数组中，空间复杂度是O(n),时间复杂度O(1)
//例如[3,4,-1,1]=> 遍历整个数组， 数值要存储到各自的位置上比如1应该在0上，2应该在2上，3应该在3上...
//[3，4，-1，1]中，i=0， 3 应该在index2上，所以个-1交换。==》[-1,4,3,1];
//一直循环交换排序知道数组变为：[1,-1,3,4], -1的位置上应该是2，所以就返回2.
//注意加入[1,2,3,4]返回的是
var firstMissingPositive = function(nums) {
    //定义一个n是数组的最大值
    let n = nums.length
    //遍历数组
    for(let i = 0; i < n; i++){
        //while循环交换排序
        while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]){
            //交换两个数
           /* var tmp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tmp*/

           //es6写法：
            [nums[nums[i] -1], nums[i]] = [nums[i], nums[nums[i] - 1]]
        }
    }

    //遍历排好的数组，返回结果, 例如i指向[1,-1,3,4]中的-1，返回
    for(i = 0; i < n; i++){
        if(nums[i] != i+1){
            return i + 1
        }
    }

    //如果数组是[1,2,3,4,5],返回n+1
    return n + 1
};

let nums = [1,2,3,0]
console.log(firstMissingPositive(nums))
