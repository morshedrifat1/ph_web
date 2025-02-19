function checkDigitsInName(name) {
  let constDig = false;
  if (typeof name != "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < name.length; i++) {
    let chr = name[i];
    if (!isNaN(chr) && chr != " ") {
      constDig = true;
      break;
    }
  }
  return constDig;
}

const inputName = checkDigitsInName("Raj123");
console.log(inputName);
