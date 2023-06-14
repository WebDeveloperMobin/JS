function nextAlphabet (arg1){
   const alphabet = arg1.split('').map(val => val).toString();
   console.log(String.fromCharCode(alphabet.charCodeAt(alphabet) + 1));
}

console.log(nextAlphabet("bncd"));