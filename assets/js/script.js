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

var charList = {
  lowerCase_chars: "abcdefghijklmnopqrstuvwxyz",
  upperCase_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers_chars: "1234567890",
  special_chars: "!@#$%^&*()"
}

// ================ Functions ================
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

  console.log("Pass Length = " + finalPassArray.length)
  console.log("Char List Length = " + finalCharList.length)

  if (password.lowercase === 'true') {
    for (let i = 0; i < charList.lowerCase_chars.length; i++) {

      if ((finalPassArray.indexOf(charList.lowerCase_chars[i]) === -1) && !(validFlag)) {
        console.log("WARNING: PASSWORD MISSING LowerCase Char! || " + charList.lowerCase_chars[i])
        validFlag = false;
      }
      else {
        if (!(validFlag)) {
          validFlag = true;
          console.log(charList.lowerCase_chars[i] + " lower case Char found in password!");
        }

      }

    }
    //    finalPassword must contain char from charList.lowerCase_chars
  }

  // Flag Reset
  validFlag = false;

  if (password.uppercase === 'true') {
    for (let i = 0; i < charList.upperCase_chars.length; i++) {

      if ((finalPassArray.indexOf(charList.upperCase_chars[i]) === -1) && !(validFlag)) {
        console.log("WARNING: PASSWORD MISSING Upper Case Char! || " + charList.upperCase_chars[i])
        validFlag = false;
      }
      else {
        if (!(validFlag)) {
          validFlag = true;
          console.log(charList.upperCase_chars[i] + " Upper case Char found in password!");
        }

      }

    }
  }

  // Flag Reset
  validFlag = false;

  if (password.numeric === 'true') {
    for (let i = 0; i < charList.numbers_chars.length; i++) {

      if ((finalPassArray.indexOf(charList.numbers_chars[i]) === -1) && !(validFlag)) {
        console.log("WARNING: PASSWORD MISSING Numbers! || " + charList.numbers_chars[i])
        validFlag = false;
      }
      else {
        if (!(validFlag)) {
          validFlag = true;
          console.log(charList.numbers_chars[i] + " Numbers found in password!");
        }

      }

    }
  }

  // Flag Reset
  validFlag = false;

  if (password.specialChar === 'true') {
    for (let i = 0; i < charList.special_chars.length; i++) {

      if ((finalPassArray.indexOf(charList.special_chars[i]) === -1) && !(validFlag)) {
        console.log("WARNING: PASSWORD MISSING Special Char! || " + charList.special_chars[i])
        validFlag = false;
      }
      else {
        if (!(validFlag)) {
          validFlag = true;
          console.log(charList.special_chars[i] + " Special Char found in password!");
        }

      }

    }
  }

  // if (password.lowercase === 'true') {

  //   for (var i = 0; i < ; i++) {
  //     lowercase
  //     password.newPassword.includes("")
  //   }
  //   password.newPassword.includes("")
  //   //  PassUserInput();
  // }

  // indexOf()

  return finalPassword;

  if (Debug) { console.log("New Password: " + finalPassword); }
}

// ================ Function ===============
// Request a password of "newLength" to be generated and printed to page
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

// ================ Function ===============
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

