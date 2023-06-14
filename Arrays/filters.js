const data = [1,2,3,4,5,6,7,8];

const data1 = [1,2,3,4,5,6,7,8];


const logic = data.map((num)=>data1.filter((num1) => {
        return num === num1;
    })
)

console.log(logic)