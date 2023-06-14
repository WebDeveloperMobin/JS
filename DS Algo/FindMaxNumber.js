// Find the Max no from array

// step 1:- take one array as argument
// step 2 :- Consider 1 element of array as min no
// step :- if only one element in array have to show array[0]

function getMinNo(array) {
    // check if data is not available in the array
    if (!array.length) {
        console.error("Please fill the array")
    } else if (array.length === 1) {
      // if array length is one no need to run algorithm
      return array[0];
    } else {
      //  have to take current Max no
      let currentMax = array[0];
      array.forEach((i) => {
        if (array[i] > currentMax) {
            currentMax = array[i];
        }
      });
      return currentMax;
    }
  }
  
  console.log(getMinNo([2, 8, 1, 3]));
  