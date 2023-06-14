// return avarage  of array 

const avarage = (arr)=>{
    return arr.reduce(function(a,b){
         a + b / arr.length;
    })
}

console.log(avarage([10,20,30]));