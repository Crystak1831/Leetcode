package BinarySearch;

public class SearchInRotate {

    //方法一：用两次二分
    public int SearchInRotate(int[] A, int target) {
        // write your code here
        if(A == null || A.length == 0) {
            return -1;
        }

        //第一次二分招最小的数：
        int start = 0, end = A.length - 1, minPosition = 0;
        while(start + 1 < end) {
            int mid = start + (end - start) / 2;

            if(A[mid] > A[end]) {
                start = mid;
            } else {
                end = mid;
            }
        }

        if (A[start] < A[end]) {
            minPosition = start;
        } else {
            minPosition = end;
        }

        //判断target包含在哪个数组里
        if(A[A.length - 1] < target) {
            start = 0;
            end = minPosition - 1;
        } else {
            start = minPosition;
            end = A.length - 1;
        }

        while(start + 1 < end) {
            int mid = start + (end - start) / 2;

            if(A[mid] < target) {
                start = mid;
            } else {
                end = mid;
            }
        }

        if(A[start] == target) {
            return start;
        }
        if(A[end] == target) {
            return end;
        }

        return -1;

    }

    public static void main(String[] args) {
        SearchInRotate S1 = new SearchInRotate();
        int[] A = new int[] {4,5,6,7,0,1,3};
        int target = 6;
        System.out.println(S1.SearchInRotate(A, target));
    }
}
