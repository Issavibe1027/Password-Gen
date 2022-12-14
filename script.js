// Assignment Code
var generateBtn = document.querySelector("#generate");

function random(min, max) {
    return Math.floor(Math.random()*(max - min) + min)
}

Function generateRandom(list) {
    return list[random(0, list.length - 1)]
}

function generatePassword() {

    var userinput = window.prompt("What is your password length?")

    var passwordLength = parseInt(userinput)

    if (isNaN(passwordLength))
    window.alert("not a number!")
    return




}

if (passwordLength < 10 || passwordLength > 130) {
    window.alert("password ust be between 10 and 130 characters")
    return
}

var userWantsNumbers = window.confirm("Do you want numbers in your password?")
var userWantsSymbols = window.confirm("Do you want Symbols in your password?")
var userWantsUppercase = window.confirm("Do you want Uppercase in your password?")
var userWantsLowercase = window.confirm("Do you want Lowercase in your password?")

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
var symbolList = ["!", "&", "^", "*", "+",]
var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",]
var UpperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",]

var optionsCart = []

for (var i = 0; i < lowerCaseList.length; i++) {
    UpperCaseList[i] = lowerCaseList[i].toUpperCase()
}

if (userWantsNumbers === true) {
    optionsCart.push(numbers)
}

if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
}

if (userWantsUppercase === true) {
    optionsCart.push(UpperCaseList)
}

if (userWantsLowercase === true) {
    optionsCart.push(lowerCaseList)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
