// wood quantity calculation


function woodQuantity(chairQty,tableQty,bedQty){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQty * perChairWood;
    const tableTotalWood = tableQty * perTableWood;
    const bedTotalWood = bedQty * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}


const wood = woodQuantity(1,0,1);
console.log("wood needed","=", wood);
