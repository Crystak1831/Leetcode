package BinarySearch;

public class MaxNumMountain {
    public int MaxNumMountain(int[] nums) {
        // write your code here
        if(nums == null || nums.length == 0){
            return -1;
        }

        int start = 0, end = nums.length -1;
        while(start + 1 < end){
            int mid = start + (end - start) / 2;

            if(nums[mid] < nums[mid + 1]){
                start = mid;
            }else {
                end = mid;
            }
        }

        return Math.max(nums[start],nums[end]);
    }

    public static void main(String[] args){
        MaxNumMountain M = new MaxNumMountain();
        int[] arr = new int[] {1,2,4,8,6,3};
        System.out.println(M.MaxNumMountain(arr));
    }
}
