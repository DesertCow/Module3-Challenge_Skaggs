// Clayton Skaggs
// 5-19-2022
// ======================= Varriable Decleration =======================

// Debug Switch
var Debug = false;

var password = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialChar: false,
  minLength: 8,
  maxLength: 128,
  newPassword: "VOID"
}

var charList = {
  lowerCase_chars: "abcdefghijklmnopqrstuvwxyz",
  upperCase_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers_chars: "1234567890",
  special_chars: "!@#$%^&*()"
}

var lowerCharValid = false;
var upperCharValid = false;
var numericCharValid = false;
var specialCharValid = false;

// =============================== Functions ===============================

// Function generates a user password of length "passLength"
function generatePassword(passLength) {
  var finalPassword = '';

  // Build array of valid chars
  var valid_chars = "";

  if (Debug) { console.log("Uppercase Check: " + password.uppercase); }

  if (password.lowercase === 'true') {
    valid_chars = valid_chars + charList.lowerCase_chars;
  }

  if (Debug) { console.log("Lowercase Check: " + valid_chars + " || " + password.lowercase); }

  if (password.uppercase === 'true') {
    valid_chars = valid_chars + charList.upperCase_chars;
  }
  if (Debug) { console.log("Number Check: " + valid_chars + " || " + password.numeric); }

  if (password.numeric === 'true') {
    valid_chars = valid_chars + charList.numbers_chars;
  }
  if (Debug) { console.log("Special Check: " + valid_chars + " || " + password.specialChar); }

  if (password.specialChar === 'true') {
    valid_chars = valid_chars + charList.special_chars;
  }
  if (Debug) { console.log("Final Char List = " + valid_chars); }

  for (let i = 0; i < passLength; i++) {

    finalPassword = finalPassword + valid_chars.charAt(Math.floor(Math.random() * valid_chars.length));

  }

  var finalPassArray = finalPassword.split("");
  var finalCharList = valid_chars.split("");
  var validFlag = false;

  if (Debug) { console.log("Pass Length = " + finalPassArray.length); }
  if (Debug) { console.log("Char List Length = " + finalCharList.length); }


  // Confirms password has atleast 1 instance of a lowercase char in the password
  if (password.lowercase === 'true') {
    for (let i = 0; i < charList.lowerCase_chars.length; i++) {

      // Check if password (array) contains atleast one Lower Case Char.
      if ((finalPassArray.indexOf(charList.lowerCase_chars[i]) === -1) && !(validFlag)) {
        if (Debug) { console.log("WARNING: PASSWORD MISSING LowerCase Char! || " + charList.lowerCase_chars[i]); }

        // Char not found keep flag false and search with next Lower Case Char
        validFlag = false;
        lowerCharValid = false;
      }
      else {
        if (!(validFlag)) {

          // Lower Case Char has been found, exit for loop by setting validFlag to true
          validFlag = true;
          lowerCharValid = true;
          if (Debug) { console.log(charList.lowerCase_chars[i] + " lower case Char found in password! " + "Lower Flag =" + lowerCharValid); }
        }
      }
    }
  }

  // Flag Reset
  validFlag = false;

  // Confirms password has atleast 1 instance of a uppercase char in the password
  if (password.uppercase === 'true') {
    for (let i = 0; i < charList.upperCase_chars.length; i++) {

      if ((finalPassArray.indexOf(charList.upperCase_chars[i]) === -1) && !(validFlag)) {
        if (Debug) { console.log("WARNING: PASSWORD MISSING Upper Case Char! || " + charList.upperCase_chars[i]); }
        validFlag = false;
        upperCharValid = false;
      }
      else {
        if (!(validFlag)) {
          validFlag = true;
          upperCharValid = true;
          if (Debug) { console.log(charList.upperCase_chars[i] + " Upper case Char found in password!" + "Upper Flag =" + upperCharValid); }
        }

      }

    }
  }

  // Flag Reset
  validFlag = false;

  // Confirms password has atleast 1 instance of a numeric char in the password
  if (password.numeric === 'true') {
    for (let i = 0; i < charList.numbers_chars.length; i++) {

      if ((finalPassArray.indexOf(charList.numbers_chars[i]) === -1) && !(validFlag)) {
        if (Debug) { console.log("WARNING: PASSWORD MISSING Numbers! || " + charList.numbers_chars[i]); }
        validFlag = false;
        numericCharValid = false;
      }
      else {
        if (!(validFlag)) {
          validFlag = true;
          numericCharValid = true;
          if (Debug) { console.log(charList.numbers_chars[i] + " Numbers found in password!" + "Number Flag =" + numericCharValid); }
        }

      }

    }
  }

  // Flag Reset
  validFlag = false;

  // Confirms password has atleast 1 instance of a special char in the password
  if (password.specialChar === 'true') {
    for (let i = 0; i < charList.special_chars.length; i++) {

      if ((finalPassArray.indexOf(charList.special_chars[i]) === -1) && !(validFlag)) {
        if (Debug) { console.log("WARNING: PASSWORD MISSING Special Char! || " + charList.special_chars[i]); }
        validFlag = false;
        specialCharValid = false;
      }
      else {
        if (!(validFlag)) {
          validFlag = true;
          specialCharValid = true;
          if (Debug) { console.log(charList.special_chars[i] + " Special Char found in password!" + "Special Flag =" + specialCharValid + " || " + password.specialChar); }
        }
      }
    }
  }

  // Password has been validated and returned from function as 'passwordFinal' @ #171
  if (validFlag) {
    return finalPassword;
  }

  // Could not find a way to compare two boolean values to determind if they are equal, everything i tried returns false boolean statements like true = false and returing true...
  // Something todo with types... need to convert string to boolean??
  // if ((lowerCharValid != password.lowercase) && (upperCharValid != password.uppercase) && (numericCharValid != password.numeric) && (specialCharValid != password.specialChar)) {
  //   return finalPassword;
  // }
  // else {
  //   if (Debug) {
  //     console.log("FATAL ERROR: PASSWORD IS NOT VALID DUE TO MISSING ATLEAST 1 OF EACH CHAR TYPE || RESTART APP");
  //   }
  //   window.alert("WARNING: PASSWORD IS NOT VALID DUE TO MISSING ATLEAST 1 OF EACH CHAR TYPE");
  //   return "~~VOID~~";
  // }

  if (Debug) {
    console.log(lowerCharValid + "|LOWER|" + password.lowercase + "|| " + (lowerCharValid != password.lowercase));
    console.log(upperCharValid + "|UPPER|" + password.uppercase + "|| " + (upperCharValid != password.uppercase));
    console.log(numericCharValid + "|NUMERIC|" + password.numeric + "|| " + (numericCharValid != password.numeric));
    console.log(specialCharValid + "|SPECIAL|" + password.specialChar + "|| " + (specialCharValid != password.specialChar));
  }


  if (Debug) { console.log("New Password: " + finalPassword); }
}

// =============================== Function ==============================
// Request a password of "newLength" to be generated and printed to page
function writePassword(newLength) {
  var passwordFinal = "TEMP";

  if (Debug) { console.log("Password Length = " + newLength); }

  // Call fuction to generate password
  passwordFinal = generatePassword(newLength);
  password.newPassword = passwordFinal;

  //Dump password on page
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordFinal;

  if (Debug) { console.log("New Password = " + password.newPassword); }
}

// =============================== Function ==============================
// Master Function to get user input and kick off generation process
function PassUserInput() {

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

      // Logic to confirm user selected atleast a family of chars
      if ((password.lowercase === 'true') || (password.uppercase === 'true') || (password.numeric === 'true') || (password.specialChar === 'true')) {

        // Call writePassword Method to generate new password of length "newLength" and update webpage HTML
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
  //if(password.newPassword)

  if (Debug) {
    console.log("Var |password| State = " + tempLength + " || "
      + password.lowercase + " || " + password.uppercase + " || "
      + password.numeric + " || " + password.specialChar + " || "
      + password.minLength + " || " + password.maxLength);
  }
}

// ================ MAIN ===============

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", PassUserInput);

// ================ END MAIN ===============

