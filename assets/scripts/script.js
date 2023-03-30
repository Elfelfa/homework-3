// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Indexes:
// 0-9: Numbers (10 total indexes)
// 10-35: Lowercase letters (26 total indexes)
// 36-61: Uppercase letters (26 total indexes)
// 62-94: Special characters (33 total indexes)
const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
                  'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                  'Y', 'Z', ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',',
                  '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_',
                  '`', '{', '|', '}', '~'];


var numChars = 0;
var num, lower, upper, special = null;

// Write password to the #password input
function writePassword() 
{
  var password = "";

  numChars = 0;
  num, lower, upper, special = null;

  //Generate a password using the user's input values
  gatherData();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Replaces the placeholder text on the page with the new password.
  passwordText.value = password;
}

function gatherData()
{
  //Request a number from the user between 8-128. Loop the request if the entry is not valid.
  while (true)
  {
    numChars = prompt("Please specify the number of characters you'd like in your new password. Minimum: 8, Maximum: 128");

    //Checks to make sure the input from the user is a valid number
    if (!isNaN(numChars))
    { 
      //Converts the input from a string to a number
      numChars = parseInt(numChars);

      //If the number is between 8 and 128 the program continues. If not, it loops the request.
      if ((numChars >= 8) && (numChars <= 128))
      {
        break;
      }
    }

    alert("Invalid entry");
  }

  //Request the user to confirm if they would like to add numbers, lowercase, uppercase, and special characters
  while(true)
  {
    num = confirm("Would you like to include numbers in your new password?");
    lower = confirm("Would you like to include lowercase letters in your new password?");
    upper = confirm("Would you like to include uppercase letters in your new password?");
    special = confirm("Would you like to include special characters in your new password?");

    var temp = [num, lower, upper, special];
    var atLeastOne = false;

    for (const obj in temp)
    {
      if (temp[obj] === true)
      {
        
        atLeastOne = true;
      }
    }
    
    //If the user said no to everything, redo the request stating that the user must pick at least one.
    if (atLeastOne == true)
    {
      break;
    }

    alert("You must pick at least one!");
  }

  return;
}

//c is an int (number of characters)
//n, l, u, s are booleans.
function generatePassword()
{
  var newPassword = "";

  //Creating an editable copy of all possible characters for the new password
  var selectedCharacters = [];
  selectedCharacters = selectedCharacters.concat(characters);

  //These if statements will remove characters that the user does not want from the array
  if (!special)
  {
    selectedCharacters.splice(62, 33);
  }

  if (!upper)
  {
    selectedCharacters.splice(36, 26);
  }

  if(!lower)
  {
    selectedCharacters.splice(10, 26);
  }

  if(!num)
  {
    selectedCharacters.splice(0, 10);
  }

  for (numChars; numChars > 0; numChars--)
  {
    newPassword += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  }

  return newPassword;
}