// Varriable Decleration

var Debug = true;

var password = {
  newLength: 12,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialChar: false
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", PassGen);

// Method to Pickup user defined password length
function PassGen() {

  // Grab User Input  
  var tempLength = window.prompt("Please Specify a Password Length");
  password.lowercase = window.prompt("Do you want to use lower case characters? (True/False)");
  password.uppercase = window.prompt("Do you want to use uppper case characters? (True/False)");
  password.numeric = window.prompt("Do you want to use numeric characters? (True/False)");
  password.specialChar = window.prompt("Do you want to use special characters? (True/False)");

  if (Debug) {
    console.log("Password Length = " + tempLength);
    console.log("password config Dump = " + tempLength + " || " + password.lowercase + " || " + password.uppercase + " || " + password.numeric + " || " + password.specialChar);
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
  var lowerCase_chars = "abcdefghijklmnopqrstuvwxyz";
  var upperCase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers_chars = "1234567890";
  var special_chars = "!@#$%^&*()";

  // Build array of valid chars
  var valid_chars = "";

  if (password.lowercase) {
    valid_chars = valid_chars + lowerCase_chars;
  }

  if (password.uppercase) {
    valid_chars = valid_chars + upperCase_chars;
  }

  if (password.numeric) {
    valid_chars = valid_chars + numbers_chars;
  }

  if (password.specialChar) {
    valid_chars = valid_chars + special_chars;
  }

  if (Debug) {
    console.log("Final Char List = " + valid_chars);
  }

  for (let i = 0; i < passLength; i++) {
    finalPassword = finalPassword + valid_chars.charAt(Math.floor(Math.random() * valid_chars.length));
    if (Debug) {
      // console.log("i = " + i + "|| passwordLength =" + passLength)
    }

  }
  return finalPassword;

  if (Debug) {
    console.log("New Password: " + finalPassword);
  }
}


// console.log("New Password = " + generatePassword(password.newLength));

