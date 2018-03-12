var userInput = prompt("Would you like to print your name?");
var x = "!";

if (userInput == 'yes') {
    console.log("My name is John.");
}

var again = prompt("Would you like to print your name again?");
var myName = "My name is John";

while (again == 'yes') {
    var addExclam = console.log(myName += x);
    var again = prompt("Would you like to print your name again?");
}





