const mobile ={
    brand:"samsung",
    price:25000,
    color:"black",
    model:"A35"
}


for(const proper in mobile){
    console.log(proper);
    console.log(mobile[proper]);
}


const computer = {
    brand: "hp",
    price: 35000,
    processor: "intel",
    ssd: "256gp",
    type: "laptop"
}

const key = Object.keys(computer);
console.log(key);
for(const ind of key){
    console.log(ind);
    college.log(computer[ind]);
}
