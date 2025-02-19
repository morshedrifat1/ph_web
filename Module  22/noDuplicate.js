// array has some duplicate elemets 

function noDuplicate(arr){
    let unique = [];
    for(const item of arr){
       if(unique.includes(item) == false){
        unique.push(item);
       }
    }
    return unique;
}


const uniqueArray = noDuplicate(["morshed","rifat","shakib","rifat","morshed","tahsin","shakib"]);

console.log(uniqueArray);