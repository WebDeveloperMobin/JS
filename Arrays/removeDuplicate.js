const arr1 = [1,2,3,4,3,5,7,5,3,6,7,8];
const arr2 = [1,2,3,4,9, 10]; 
// Expected output [1,2,3,4,5,6,7,8,9,10]

// function RemoveDuplicates(data1) {
//   return data1
//     .filter((value, index, array) => array.indexOf(value) === index)
//     .concat(arr2);
// }

console.log(
    arr1.filter((value,index) => arr2.indexOf(value))
)

// function RemoveDuplicates(array1, array2){
//     return array1.filter((value,index)=> array2.includes(value).filter((value1, i)=> ))
// }


// console.log(RemoveDuplicates(arr1, arr2));
