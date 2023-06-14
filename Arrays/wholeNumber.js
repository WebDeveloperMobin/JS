function wholeNumber(num){
    return num % 1 !== 0;
}

console.log(wholeNumber(2))

function wholeNumber1(num){
    return Number.isInteger(num);
}

console.log(wholeNumber1(2.5))


function myFunction(input) {
    return input - Math.floor(input) === 0
  }