function compareTriplets(a, b) {
    // Write your code here
   let aCount = 0;
   let bCount = 0;
   
   for(let i=0; i<3; i++){
       if(a[i] > b[i]){
           aCount++;
       } else if(b[i] > a[i]) {
           bCount++;
       } else if(a[i] === b[i]) {
        //    aCount = 0;
        //    bCount = 0;
           console.log("No one recieve point");
       }
   }
    return [aCount, bCount];
}

console.log(compareTriplets([1,4,7], [2, 4 ,8]));