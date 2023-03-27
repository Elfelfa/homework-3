// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays containing all possible non-numerical characters for password creation.
const letters = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`,
                 `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`,
                 `U`, `V`, `W`, `X`, `Y`, `Z`];
const special = [` `, `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`,
                 `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`,
                 `@`, `[`, `\\`, `]`, `^`, `_`, `\``, `{`, `|`, `}`, `~`];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
