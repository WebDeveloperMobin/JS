/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/


const addNumber = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++){
            console.log(arr1[i] + arr2[j])
        }
    }
}

addNumber([2,4,3], [5,6,4])