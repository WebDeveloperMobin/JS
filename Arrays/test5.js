// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function letter(a) {
  const data = a.split('');
  return data.map((item) => {
      console.log(item.indexOf(item));
    // console.log(item);
    // console.log(item.fromCharCode(item));
  });
  // console.log(data.map((item, index)=> item.fromCharCode(item.charCodeAt(index)+ 1)))
  // i.fromCharCode(i.charCodeAt(0) + 1)
  // return String(a).fromCharCode(a.charCodeAt(0)+ 1);
}

console.log(letter('abcd'));
