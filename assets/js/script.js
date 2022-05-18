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
  var tempLength = window.prompt("Please Specify a Password Length");

  if (Debug) {
    console.log("User Input = " + tempLength);
  }

  if (tempLength > 8) {

    if (tempLength < 128) {

      password.newLength = tempLength;
      console.log("Password Length Set From User Input = " + password.newLength);
      writePassword(password.newLength);

    } else {
      console.log("ERROR INVALID INPUT TRY AGAIN!");
      window.alert("ERROR INVALID INPUT TRY AGAIN!");
    }
  } else {
    console.log("ERROR INVALID INPUT TRY AGAIN!");
    window.alert("ERROR INVALID INPUT TRY AGAIN!");
  }
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

