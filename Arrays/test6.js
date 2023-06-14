// Addition of array 

const additionOfArray = function(a) {
    return a.reduce((j,k)=> {
        return j + k;
    }, 0)
}

console.log(additionOfArray([1,2,3]));