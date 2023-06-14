/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// const getTwoSum = (nums, target) =>{
//     for(var i =0;i<nums.length;i++){
//         var item = nums[i];
//         console.log(item)   
//         for(var j=0; j < nums.length;j++){
//             var item2 = nums[j];
//             // console.log(item2)
//             var sum = item + item2;
            
//         if(sum === target ){
//           return [i,j];
          
//         }
//       }
//      }
// }

// console.log(getTwoSum([2,7,11,15], 9));



function getSum(arr, target) {
    for(var i=0;i<arr.length;i++){
        var item = arr[i];
        for(var j=0;j<arr.length;j++){
            var item2 = arr[j];
            var sum = item + item2;
            if(sum === target){
                return [i, j]
            }
        }
    }
}
console.log(getSum([2,7,11,15], 26))