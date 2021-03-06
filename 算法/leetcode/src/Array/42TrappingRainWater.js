/*
* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

* */
/*java:
* class Solution {
    public int trap(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int res = 0;
        int leftMax = 0;
        int rightMax = 0;

        while(left < right) {
            if(height[left]<height[right]){
                leftMax = Math.max(height[left],leftMax);
                res += leftMax - height[left];
                left++;
            }else{
                rightMax = Math.max(height[right],rightMax);
                res += rightMax - height[right];
                right--;
            }
        }
      return res;
    }
}
*
* */
var trap = function(height) {
    let right = height.length - 1;
    let left = 0;
    let leftMax = 0;
    let rightMax = 0;
    let res = 0;

    while(left < right){
        if(height[left] < height[right]){
            leftMax = Math.max(height[left],leftMax);
            res += leftMax - height[left];
            left++;
        }else{
            rightMax = Math.max(height[right],rightMax);
            res += rightMax - height[right];
            right--;
        }
    }

    return res
};

var height = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(height))

