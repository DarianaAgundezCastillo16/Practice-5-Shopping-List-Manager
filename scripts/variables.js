console.log("Variables js");
//this is a comment
//keyword namevar = value;
//var, let, const

//string
let firstName = "luis";
let thisIsMyVariableCalledSomething = "Dariana";
console.log(firstName);

firstName = "Dariana";
console.log(firstName);


//number
let number = 10;
number = 25;
console.log(number);

//boolean
let isStudent = true; //false

console.log("My name is " + firstName + " the number is " + number + " is student? " + isStudent);

//string interpolation
console.log(`My name is ${firstName} the number is ${number} is student? ${isStudent}`);

// Math operators + - * / %
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("the sum is " + sum);
console.log("the sub is " + sub);
console.log("the mul is " + mul);
console.log("the div is " + div);

// constasts (const)
const weekDays = 7; 
console.log(weekDays);
// error the constan is always the same 
//weekDays = 5;

//prompt function (allow to ask for data from the browser)

let word = Number(prompt("enter somenthing:")) //casting a string into number
console.log(word);

console.log("================")
let res = word + num1;
console.log(res);

