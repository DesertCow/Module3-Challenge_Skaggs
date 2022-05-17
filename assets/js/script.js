// Assignment code here
var passwordLength = 10;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(passwordLength) {
  var newPassword = '';
  var valid_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"

  for (let i = 0; i < passwordLength; i++) {
    newPassword = newPassword + valid_chars.charAt(Math.floor(Math.random() * valid_chars.length));
    console.log("i = " + i + "|| passwordLength =" + passwordLength)
  }
  return newPassword;

  console.log("New Password: " + newPassword);
}

