function validEmail(email) {
    if(typeof email != "string"){
        return "Invalid";
    }
    const characters = ".-_+@";
    if (!characters.includes(email[0]) && email.includes("@") && email.includes(".com") && !email.includes(" ")) {
        return true;
    }
    else {
        return false;
    }
}


const vEmail = validEmail("hero@alom.com");
console.log(vEmail);