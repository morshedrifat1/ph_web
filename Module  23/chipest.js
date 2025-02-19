function getChipestPhone(phones){
    let chip = phones[0].price;
    let chipPh = {}; 
    for(let i = 0; i < phones.length; i++){
        if(phones[i].price < chip){
            chip = phones[i].price;
            chipPh = phones[i];
        }
    }
    return chipPh;
}


const mobiles = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Xiome', price: 12000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

const chipPhone = getChipestPhone(mobiles);
console.log("chipest phone","=", chipPhone);



// another way to found result 
console.log("another way to found result -------------------->");


function getCheapest_Phone (phones){
    let min = phones[0];
    for (const phone of phones) {

    if (phone.price < min.price) {

    min = phone
    
    }

    }

    return min;

}

const mobile_ph = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Xiome', price: 12000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

const ph = getCheapest_Phone(mobile_ph);
console.log("chipest phone","=",ph);