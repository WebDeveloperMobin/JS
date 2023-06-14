const products = [
  {
    id: 1,
    productType: 'TV',
    products: ['HDTV', 'LEd', 'LCD', 'LCD'],
  },
  {
    id: 2,
    productType: 'Freez',
    products: ['Dhadh', 'test', 'HP', 'test'],
  },
];
const tv = [];
const freez = [];
const mobile = [];

// console.log(products.filter((item,index, array)=> item === "TV"));
// console.log(products.filter((item,index,array)=> item.productType === "TV" ? tv.push(item): freez.push(item)));

console.log(
  products.map((item) =>
    item.products.filter(
      (value, index, array) => array.indexOf(value) === index
    )
  )
);

// products.map((item, index)=>{
//     if(item === "TV"){
//         tv.push(item);
//     } else if(item === "Freez"){
//         freez.push(item);
//     } else if(item === "Mobile"){
//         mobile.push(item);
//     }
// })

console.log(
  tv.map((item, value, array) =>
    item.products.filter((prod, index) => item !== prod)
  )
);
// console.log(freez);
// console.log(mobile);

// products.forEach((item, index)=>{
//     if(item === "TV"){
//         console.log(item);
//     }
// })
