function myFunction(first, second) {

    return [...first].filter(val => val === second).length
 }

 console.log(myFunction("M", "Mobin"))

 function myFunction1(first, second) {

    return [...second].filter(val => val === first).length
 }

 console.log(myFunction1('m', 'How many times does the character occur in this sentence?'))


 