//set variables
var passwordLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specialCharacter = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";
var userPassword = "";
var passwordGroup = "";


function promptButton(){
    //ask user to enter the length of the password
    passwordLength = parseInt(prompt("enter length of password.",""));
        
    while (passwordLength < 8 || passwordLength > 128){
        passwordLength = parseInt(prompt("Enter length of password.* Length must be between 8 - 128 characters",""));
    }


    // Confirm whether user wants to use lower case letters 
    var selectLowerCase = confirm("Would you like to use lower case letters?");
    // Confirm whether user wants to use upper case letters
    var selectUpperCase = confirm("Would you like to use upper case letters?");
    //Confirm whether user wants to use numeric characters 
    var selectNumber = confirm("Would you like to use numbers?");
    //Confirm whether user wants to use special symbols
    var selectSpecial = confirm("Would you like to user special characters?");

    //Call function to generate password 
    var result = generatePassword(selectLowerCase,selectUpperCase,selectNumber,selectSpecial);

    alert("Your Password is: "+ result);
    //Write generated password on page
    document.getElementById("password").innerHTML = userPassword;
}


//Generate password. If user selected an option, randomly select a character from that string. Then from those options randomly pick characters with the maximum number of characters being the user length.
function generatePassword(selectLowerCase,selectUpperCase,selectNumber,selectSpecial){
    if (selectLowerCase) {
        passwordGroup += lowerCase;
    }
    if (selectUpperCase) {
        passwordGroup += upperCase;
    }
    if (selectNumber) {
        passwordGroup += numbers;
    }
    if (selectSpecial) {
        passwordGroup += specialCharacter;
    }
    for (let i =0; i < passwordLength; i++) {
        
        userPassword += passwordGroup.charAt(Math.floor(Math.random()*passwordGroup.length)
        );
    }
    console.log(userPassword);
    return userPassword;

}
