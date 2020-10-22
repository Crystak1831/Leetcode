var twoSum = function(nums, target){
   //  let map = new Map();
   //
   //  for(let i = 0; i < nums.length; i++){
   //      if(map.has(target-nums[i])){
   //          // console.log([(map.get(target-nums[i])),i])
   //          // console.log([map.get(target-nums[i]),i])
   //         return [(map.get(target - nums[i]), i)]
   //      }
   //      else{
   //          map.set(nums[i],i)
   //         console.log(map.set(nums[i],i))
   //      }
   //  }
   // return []

    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i]
        }else{
            map.set(nums[i],i)
        }
    }
    return []
}
let nums = [1,2,6,3,10];
let target = 9;
console.log(twoSum(nums, target))
