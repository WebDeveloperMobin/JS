// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function splitNo(a){
    return String(a).split("").map(Number);

}

console.log(splitNo(12));