// ================ Varriable Decleration ================

var Debug = true;

var password = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialChar: false,
  minLength: 8,
  maxLength: 128,
  newPassword: "VOID"
}

// ================ Functions ================

function generatePassword(passLength) {
  var finalPassword = '';
  var lowerCase_chars = "abcdefghijklmnopqrstuvwxyz";
  var upperCase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers_chars = "1234567890";
  var special_chars = "!@#$%^&*()";

  // Build array of valid chars
  var valid_chars = "";

  console.log("Uppercase Check: " + password.uppercase)

  if (password.lowercase === 'true') {
    valid_chars = valid_chars + lowerCase_chars;
  }

  console.log("Lowercase Check: " + valid_chars + " || " + password.lowercase);

  if (password.uppercase === 'true') {
    valid_chars = valid_chars + upperCase_chars;
  }

  console.log("Number Check: " + valid_chars + " || " + password.numeric);

  if (password.numeric === 'true') {
    valid_chars = valid_chars + numbers_chars;
  }

  console.log("Special Check: " + valid_chars + " || " + password.specialChar);

  if (password.specialChar === 'true') {
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

// Write Generated Password to console and HTML
function writePassword(newLength) {
  var passwordFinal = "TEMP";

  if (Debug) {
    console.log("Password Length = " + newLength);
  }

  // Call fuction to generate password
  passwordFinal = generatePassword(newLength);
  password.newPassword = passwordFinal;

  //Dump password on page
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordFinal;

  if (Debug) {
    console.log("New Password = " + password.newPassword);
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", PassGen);

// Method to Pickup user defined password length
function PassGen() {

  // Grab User Input  
  var tempLength = window.prompt("Please Specify a Password Length");

  if (tempLength > password.minLength) {

    if (tempLength < password.maxLength) {

      password.newLength = tempLength;

      // Get User input / convert to boolean value
      var lowercaseTemp = window.prompt("Do you want to use lower case characters? (True/False)");
      password.lowercase = lowercaseTemp.toLowerCase();

      // Get User input / convert to boolean value
      var uppercaseTemp = window.prompt("Do you want to use uppper case characters? (True/False)");
      password.uppercase = uppercaseTemp.toLowerCase();

      // Get User input / convert to boolean value
      var numericTemp = window.prompt("Do you want to use numeric characters? (True/False)");
      password.numeric = numericTemp.toLowerCase();

      // Get User input / convert to boolean value
      var specialCharTemp = window.prompt("Do you want to use special characters? (True/False)");
      password.specialChar = specialCharTemp.toLowerCase();

      // Logic to confirm user selected atleast family of chars
      if ((password.lowercase === 'true') || (password.uppercase === 'true') || (password.numeric === 'true') || (password.specialChar === 'true')) {
        // Call wirePassword Method to generate new password of length "newLength"
        writePassword(password.newLength);
      } else {
        console.log("ERROR: NO CHARS SELECTED, PLEASE ENABLE ATLEAST ONE CHAR SET");
        window.alert("ERROR: NO CHARS SELECTED, PLEASE ENABLE ATLEAST ONE CHAR SET");
      }

    } else {
      console.log("ERROR:LENGTH TOO LONG MUST BE LESS THAN 128");
      window.alert("ERROR: LENGTH TOO LONG MUST BE LESS THAN 128");
    }

  } else {
    console.log("ERROR:LENGTH TOO SHORT MUST BE GREATER THAN 8");
    window.alert("ERROR:LENGTH TOO SHORT MUST BE GREATER THAN 8");
  }

  // Logic to confirm atleast one of each type of char in password
  // if () {
  //   PassGen();
  // }


  if (Debug) {
    console.log("password config Dump = " + tempLength + " || " + password.lowercase + " || " + password.uppercase + " || " + password.numeric + " || " + password.specialChar + " || " + password.minLength + " || " + password.maxLength);
  }
}




// console.log("New Password = " + generatePassword(password.newLength));

