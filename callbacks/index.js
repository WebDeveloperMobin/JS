//  Callback functions


// const fun1 = () =>{
//     setTimeout(() => {
//         console.log('Hello1');
//         fun2();
//     }, 3000)
// }


// var fun2 = () =>{
//     setTimeout(() => {
//         console.log('Hello2')
//     }, 1000)
// }

// fun1();



// Callback passsing as argument

const fun3 = (name, callback) =>{
    setTimeout(() => {
    console.log(`Hello ${name}.`);
    callback();
    }, 3000)
}

const fun4 = () =>{
    setTimeout(() => {
    console.log(`I am from Sangli`)
    }, 3000)
}

fun3("Mobin", fun4);