// Varriable Decleration

var Debug = false;

var password = {
  newLength: 12,
  lowercase: true,
  uppercase: false,
  numeric: true,
  specialChar: true
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", PassGen);

// Method to Pickup user defined password length
function PassGen() {
  writePassword(password.newLength);
}

// Write password to the #password input
function writePassword(newLength) {
  var password = "TEMP";

  if (Debug) {
    console.log("Password Length = " + newLength);
  }

  // Call fuction to generate password
  password = generatePassword(newLength);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  if (Debug) {
    console.log("New Password = " + password);
  }
}

function generatePassword(passLength) {
  var finalPassword = '';
  var valid_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"

  for (let i = 0; i < passLength; i++) {
    finalPassword = finalPassword + valid_chars.charAt(Math.floor(Math.random() * valid_chars.length));
    if (Debug) {
      console.log("i = " + i + "|| passwordLength =" + passLength)
    }

  }
  return finalPassword;

  if (Debug) {
    console.log("New Password: " + finalPassword);
  }
}


// console.log("New Password = " + generatePassword(password.newLength));

