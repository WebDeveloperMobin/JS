function test(a, b){
    return a.indexOf(b) === -1 ? a + b : b + a;
}

console.log(test(" think, therefore I am","I"));
