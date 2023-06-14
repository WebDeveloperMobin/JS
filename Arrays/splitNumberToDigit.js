function myFunction(number) {

    return number.toString().split("").map(Number)
 }

 console.log(myFunction(234))


//  function myFunction1(num){
//     return Array.from(num.toString(), Number)
// }

// console.log(myFunction1(234))
