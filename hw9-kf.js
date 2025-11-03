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
  console.log("testNumber and testBoolean are loosely equal.");
}

//Exercise 12
var versionA = 10.0;
var versionB = "10.0";
if(versionA !== versionB){
console.log("the variables are not equal");
}
else{
  console.log("the variables are equal!");
}

//Exercise 13
let isLoggedIn = true;
let isSubscriber = true;
let isTrialExpired = false;
if((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)){
  console.log("Access Granted!");
} else {
  console.log("Access Denied!");
}

//Exercise 14
let conditionA = true;
let conditionB = false;
if (conditionA) {
  if (!conditionB) {
    console.log("XOR Success");
  } else {
    console.log("XOR Fail");
  }
} else {
  if (conditionB) {
    console.log("XOR Success");
  } else {
    console.log("XOR Fail");
  }
}

//Exercise 15
let scriptLoadType = "deferred";
let loadStatus;
if(scriptLoadType == "deferred"){
   loadStatus = "Non-Blocking";
} else {
   loadStatus = "Potential Blocking";
}

//Rewritten 
let scriptLoadType = "deferred";
let loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";

//Exercise 16
/*the purpose of this function to calculate the time it takes to parse HTML and execute JavaScript*/
function calculateRenderTime(){
  // Add in code for function
}

//Exercise 17 
var date = new Date();
console.log("Today is " + date.toLocaleDateString());

//Exercise 18
var val1 = 20;
var val2 = "5";
sumResult = val1 + val2;
diffResult = val1 - val2;
console.log(sumResult);
console.log(diffResult);
/* the reason these results are so different is because the + operations has to purposes one is for mathematical
equations when adding two numbers and the second is combining two strings so the console recognizes the string in 
the equation and decides to put together the two objects instead of adding while - operation is only for mathematical
arithemtic equations so it does the math operation instead */

//Exercise 19
var dataInput = 484;
if (typeof dataInput === "number") {
  console.log("Input is numeric.");
} else {
  dataInput = true;
  console.log(typeof dataInput);
}

//Exercise 20
var textLayer = "Interactive Layer Loaded";
document.body.innerHTML = "<h1>" + textLayer + "</h1>";
/*if this script was placed in the head HTML without defer or async attributes it will throw an error because the body
element might not exist yet so it will try to access a element that doesnt exist and throw an error*/
