// Assignment Code
var generateBtn = document.querySelector("#generate");
// creating strings to create a pool to generate code from.
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numerals = "0123456789";
// creating an empty string to store user selections.
var passwordpool = "";

var characterselect = false; 

// created a while loop to collect user inputs and make sure we dont have empty passwords.
  while (!characterselect) {
    var isUseLowerCase = confirm("Would you like to have lower case letters in your password? Hit cancel if your answer is 'no'.");
    if (isUseLowerCase){
     passwordpool = passwordpool + lowercaseLetters;
    };
    console.log("islowercase test: " + passwordpool);
    var isUseUpperCase = confirm("Would you like to have upper case letters in your password? Hit cancel if your answer is 'no'.");
    if(isUseUpperCase) {
      passwordpool = passwordpool + uppercaseLetters;
    };
    console.log("isUppercase test: " + passwordpool);
    var isNumerals = confirm("Would you like to have numbers in your password? Hit cancel if your answer is 'no'.");
    if(isNumerals) {
      passwordpool = passwordpool + numerals;
    };
    console.log("Numerals test: " + passwordpool);
    var isSpecialCharacters = confirm("Would you like to have Special Characters in your password? Hit cancel if your answer is 'no'.");
    if(isSpecialCharacters) {
      passwordpool = passwordpool + specialCharacters;
    };
    console.log("Special characters test: " + passwordpool);

    if (passwordpool === "") {
      alert("You must choose at least one character type to generate a password.")
      characterselect = false;
    }
    else {
      characterselect = true;
    }
  }