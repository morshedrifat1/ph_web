function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let splitEmail = email.split("@");
  let userName = splitEmail[0];
  let domain = splitEmail[1];
  let newString = userName + " sent you an email from " + domain;
  return newString;
}

const emailMessage = sendNotification("ifo.morshedrifat@gmail.com");
console.log(emailMessage);
