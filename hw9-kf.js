//Excerise 1
camelCase = 3 + 5 * (10 / 2) - (8 - 4);
console.log(camelCase);

//Excerise 2
var projectIdentifier;
projectIdentifier = "COMP484";
//this fails because JS is case senstive and will assign it to a new variable while the original variable is still COMP484
ProjectIdentifier = "JS_Advanced";
projectIdentifier = "JS_Advanced";
console.log(projectIdentifier);

//Excerise 3
var courseDescription;
courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log(courseDescription);

//Excerise 4
var errorMessage = 'An internal server error occured: \"Access Denied\".';
console.log(errorMessage);

//Excerise 5
var valueA = 10;
var valueB = "4";
resultSubtraction = valueA - valueB;
resultMultiplication = valueA * valueB;
console.log(resultMultiplication);
console.log(resultSubtraction);
console.log(typeof valueB);

//Excerise 6 
var unassignedVar;
var explicitNull = null;
console.log(unassignedVar);
//since we declared the variable earlier with a value even though its null it recognizes it as an object
console.log(explicitNull);

//Exercise 7
var isBlocking = true;
console.log(typeof isBlocking);
isBlocking = "true";
console.log(typeof isBlocking);

//Exercise 8
/*var my Name; this doesnt work because of the white space between the words as its agreed upon to use camel space to put two words together so using spaces messes up the declaration
var 8myName; the console finds it as an invalid token
var !myName the conosle finds it as an unexpected token */

//Exercise 9
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log(counterValue);

//Exercise 10
var x = 10;
var y_post = x++;
console.log(x);
//++ after makes it so the y_post keeps the value from before the x is upped 1 while the x is set to plus 1
console.log(y_post);
x = 10;
var z_pre = ++x;
console.log(x);
// ++ before makes it so the z_pre gets the updated value of x so both z_pre and x are pluse 1
console.log(z_pre);

//Exercise 11
var testNumber = 0;
var testBoolean = false;
if(testNumber == testBoolean){
  //due to type corercion javascript converts booleans to numbers and false = 0 so its able to do the comparison of 0 == 0 making it true
  console.log("testNumber and testBoolean are loosely equal.")
}
