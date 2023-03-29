// Assignment Code
var generateBtn = document.querySelector("#generate");

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

// Write password to the #password input
function writePassword() 
{
  var numChars = 0;
  var num, lower, upper, special;

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

    //If the user said no to everything, redo the request stating that the user must pick at least one.
    if ((true in {num, lower, upper, special}) === false)
    {
      break;
    }

    alert("You must pick at least one!");
  }

  //Generate a password using the user's input values
  var password = generatePassword(numChars, num, lower, upper, special);
  var passwordText = document.querySelector("#password");

  //Replaces the placeholder text on the page with the new password.
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//c is an int (number of characters)
//n, l, u, s are booleans.
function generatePassword(c, n, l, u, s)
{
  //Creating an editable copy of all possible characters for the new password
  var selectedCharacters = characters;
  newPassword = '';

  //These if statements will remove characters that the user does not want from the array
  if (!s)
  {
    selectedCharacters.splice(62, 33);
  }

  if (!u)
  {
    selectedCharacters.splice(36, 26);
  }

  if(!l)
  {
    selectedCharacters.splice(10, 26);
  }

  if(!n)
  {
    selectedCharacters.splice(0, 10);
  }

  for (c; c > 0; c--)
  {
    newPassword += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  }

  return newPassword;
}