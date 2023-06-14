// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let data = "a abcd ddeefghjjjhh edfrtyuioa";

let splitted = data.split(" ");

let string = [];

for(let i =0; i< splitted.length; i++){
    const dSet = new Set(splitted[i]);
    const sortedData = [...dSet].join("");
    string.push(sortedData);
}

const returnLargestString = string.reduce((a, b)=>{
    return a.length > b.length ? a : b
})

console.log(returnLargestString)
