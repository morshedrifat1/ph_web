function maxHeight(hAry){
    let maxH = 0;
    for(let i = 0; i < hAry.length; i++){
        if(hAry[i] > maxH){
            maxH = hAry[i]
        }
    }
    return maxH;
}

const height = maxHeight([65,70,75,55,78]);
console.log(height);