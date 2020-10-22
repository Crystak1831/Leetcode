//这道题使用的是双指针


var maxArea = function(height){
    let res = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right){
       res = Math.max(res, (right - left) * Math.min(height[left], height[right]));
        // console.log(res)
        if(height[left] > height[right]){
            right--;
        }else{
             left++;
        }
    }
    return res;
}

var height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))
