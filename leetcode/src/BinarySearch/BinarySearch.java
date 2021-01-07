package BinarySearch;
/*
* description
Find the last position of a target number in a sorted array. Return -1 if target does not exist.

Have you met this question in a real interview?
Example
Example 1:

Input: nums = [1,2,2,4,5,5], target = 2
Output: 2
Example 2:

Input: nums = [1,2,2,4,5,5], target = 6
Output: -1
* */

public class BinarySearch {
    public int BinarySearch(int[] nums, int target) {
        if(nums == null || nums.length == 0){
            return -1;
        }

        int start = 0, end = nums.length - 1;
        //防止陷入死循环
        while(start + 1 < end){
            int mid = start + (end - start)/2;
            if(nums[mid] == target){
                start = mid;
            }else if(nums[mid] < target){
                start = mid;
            }else{
                end = mid;
            }
        }


        if(nums[end] == target){
            return end;
        }
        if(nums[start] == target){
            return start;
        }

        return -1;
    }

    public static void main(String[] args){
        BinarySearch G1 = new BinarySearch();
        int[] arr = new int[] {1,1};
        int target = 2;
        System.out.println(G1.BinarySearch(arr,target));
    }
}
