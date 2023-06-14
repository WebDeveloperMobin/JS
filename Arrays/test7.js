// sorting of array

// const sorting = (a) =>{
//     return a.sort((j,k)=> {
//         return j < k ? -1 : 1;
//     })
// }

// console.log(sorting([2,5,1,6,3]));

//input.sort((a, b) => b - a)

const descending = (a) => a.sort((j,k)=> j > k ? -1 : 1);

console.log(descending([2,5,1,6,3]));
