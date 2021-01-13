package BinarySearch;

public class FindMin {
    public int FindMin(int[] nums) {
        // write your code here
        if(nums == null || nums.length == 0){
            return -1;
        }

        int start = 0, end = nums.length - 1;
        while(start + 1 < end){
            int mid = start + (end - start) / 2;

            if(nums[mid] > nums[0]){
                start = mid;
            }else{
                end = mid;
            }
        }

        int result = Math.min(nums[start],nums[end]);
        return Math.min(result,nums[0]);

    }

    public static void main(String[] args){
       FindMin M1 = new FindMin();
        int[] arr = new int[] {4,5,6,7,1,2,3};

       System.out.println(M1.FindMin(arr));
    }
}
