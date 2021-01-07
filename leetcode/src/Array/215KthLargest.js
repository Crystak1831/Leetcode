/*
* Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
思想：先对数组进行从小到大排序，返回index为length - k的那个数

* */

var findKthLargest = function(nums, k) {
    let length = nums.length;
    let res = nums.sort((a,b) =>  a - b)

    return res[length - k]
};

const nums = [2,4,6,7]
const k = 2
console.log(findKthLargest(nums,k))
