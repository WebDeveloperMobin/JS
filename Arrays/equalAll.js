function isAllEqual(arr){
   return arr.every((val)=> val === arr[0])
}

console.log(isAllEqual(["hello", "hel"]))


// second way to do


function myFunction( input ) {
    return new Set(input).size === 1
}
console.log(myFunction(["hello", "hello"]))
