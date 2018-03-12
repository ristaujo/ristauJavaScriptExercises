var total = " ";
var userInput = prompt("Would you like to play a game?");

do
{
var word = prompt("Enter a word.")
total = total + " " + word;
userInput = prompt("Would you like to play again?");
}
while (userInput != 'no');
alert("Output: " + total)