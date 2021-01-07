/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

* 1.数组排序
* 2.遍历数组，从0到length-2
* 3. 如果当前的数字等于前一个数字，则跳过这个数
* 4. 如果数字不同，则设置start = i + 1, end = length -1, 查看i， 查看i， start, end三个数的和比零大还是小，
*   if < 0, start++; if>0, end --; if =0, add three numbers
* 5. 返回结果
* */

var threeSum = function (nums) {
    let res = [];
    nums.sort((a,b) =>{
        return a - b;
        }
    );

    for(let i =0; i < nums.length-2; i++){
        //如果i是0 或者 i 和前面一个数不一样的话就遍历，一样的话就跳过
        if(i === 0 || nums[i] !== nums[i-1]){
            let start = i + 1;
            let end = nums.length - 1;

            while(start < end){
                if(nums[i] + nums[start] + nums[end] === 0 ){
                    res.push([nums[i], nums[start], nums[end]]);
                    //注意，指针后移动的话即放在while后是nums[start] == nums[start + 1]，nums[end] ==  nums[end - 1]；
                    // 要是start++和end--，即指针先扫数组的花是：nums[start] ==  nums[start - 1]和nums[end] == nums[end + 1]
                    start++;
                    end--;
                    //避免start和end重复,如果start和前一个数是一样的话就start++，跳过当前数字
                    while(start < end && nums[start] === nums[start - 1]){
                        start++;
                    }
                    //去重
                    while(start < end && nums[end] === nums[end + 1]){
                        end--;
                    }
                }else if(nums[i] + nums[start] + nums[end] < 0){
                    start++

                }else{
                    end--;
                };
            };
        };
    };

    return res;
}

let arr = [-1,0,1,2,-1,-4];
console.log(threeSum(arr))



