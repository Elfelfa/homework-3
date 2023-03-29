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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

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
    newPassword += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length())];
  }

  return newPassword;
}