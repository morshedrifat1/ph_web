function electionResult(votes) {
    if (Array.isArray(votes) == false) {
        return "Invalid";
    }
    let mangoCount = 0;
    let bananaCount = 0;
    for (let i = 0; i < votes.length; i++){
        if (votes[i] == "mango") {
            mangoCount = mangoCount + 1;
        }
        else if(votes[i] == "banana"){
            bananaCount = bananaCount + 1;
        }
    }

    if (mangoCount > bananaCount) {
        return "Mango";
    }
    else if (bananaCount > mangoCount) {
        return "Banana";
    }
    else {
        return "Draw";
    }
}

const ary = electionResult(["mango", "banana", "mango", "banana", "mango"]);
console.log(ary);