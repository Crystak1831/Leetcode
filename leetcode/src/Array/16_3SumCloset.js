/*
* Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.



Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
* */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let ans = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < nums.length; i++){
        let start = i + 1;
        let end = nums.length - 1;

        while(start < end){
            let sum = nums[i] + nums[start] + nums[end];
            if(Math.abs(target - sum) < Math.abs(target - ans)){
                ans = sum;
            }
            if(sum > target){
                end --;
            }else if(sum < target){
                start ++;
            }else
                return ans;
        }

    }
    return ans;
}

let nums = [-1,2,0,4];
let target = 3;
console.log(threeSumClosest(nums, target))
