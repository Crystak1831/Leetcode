/*
* Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
* */

//解法一：取出数组中最后一位插入到数组的第一位
/*var rotate = function (nums, k) {
    for(let i = 0; i < ; i ++){
        nums.unshift(nums.pop())
    }
}*/

//解法二：旋转k次例如：[1,2,3,4,5,6,7] k =3,相当于旋转三次
// 	第一次：[7,6,5,4,3,2,1]
// 	第二次：[5,6,7,4,3,2,1]
// 	第三次：[5,6,7,1,2,3,4]

var rotate = function (nums, k) {
    if(nums < 2){
        return nums
    }
    //定义reverse方法
    var  reverse = function (l,r) {
        while(l<r){
            var tmp = nums[l];
           nums[l] = nums[r]
            nums[r] = tmp
            l++;
            r--;
        }
    }

    var n = nums.length
    //如果k大于nums.length,则取余数；k=3， nums[1,2],旋转一次就可以了
    k = k%n
    //旋转整个数组
    reverse(0,n-1);
    //旋转0-k个数
    reverse(0,k-1);
    //rotate k to n-1
    reverse(k, n-1)
    return nums
}

let number = [1,2,3,4,5,6,7]
let k = 3
console.log(rotate(number,k))
