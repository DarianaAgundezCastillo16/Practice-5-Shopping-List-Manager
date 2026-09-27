console.log("Functions");
//Example 1 

//1. declaration
function sayHello(){
    console.log("Hello");
}

// 2. call/trigger/run
sayHello();

//examle 2. fn white one parameter
function greetBird(birdName){
    document.getElementById("result").
    innerHTML = `<h3> ${birdName} `;
}

greetBird("Terence");

//Example 3. fn with 2 parameters
function add(Num1, Num2){
    let total = Num1 + Num2;

    document.getElementById("result").
    innerHTML = `<h3> ${Num1} + ${Num2} = ${total} </h3>`;
}

add(34, 31);

//challenge 1: create another 3 funtions for each  math operation - * /

function sub (Num1, Num2){
    let total = Num1 - Num2;

    document.getElementById("result").
    innerHTML = `<h3> ${Num1} - ${Num2} = ${total} </h3>`;
}

sub(34, 31);

function multiply(Num1, Num2){
    let total = Num1 * Num2;

    document.getElementById("result").
    innerHTML = `<h3> ${Num1} * ${Num2} = ${total} </h3>`;
}

multiply(34, 31);

function divide(Num1, Num2){
    let total = Num1 / Num2;

    document.getElementById("result").
    innerHTML = `<h3> ${Num1} / ${Num2} = ${total} </h3>`;
}

divide(34, 31);

//Challenge 2: 
//Create a function  called `doubleScore` that takes one nomber (player score).
//the function should display the score multiplied by 2. (console)

function doubleScore(score){
    let total = score * 2;
    console.log(`The double score is ${total}`);
}
doubleScore(10);

//Conditionals 
let  res = 70
if (res > 70){
    console.log("you have passed the exam");
}

//case 1: 5 == 5 //true
//case 2: 5 == "5" //true; checks the value
//case 3: 5 === "5" //error; checks the value and the type

//challenge 1 
//scenario:
//youre a desinnig a tiny system for self - driving bikes.
//Ask for traffic ligth color
//green, yellow, red and tell the 
//bike what to do (go! slow down! stop!)

let color = prompt("Enter the traffic light color (green, yellow, red):").toLowerCase();
if (color === "green"){
    console.log("Go!"); 
} else if (color === "yellow"){
    console.log("Slow down!"); 
} else if (color === "red"){
    console.log("Stop!"); 
} else {
    console.log("Invalid traffic light color!"); 
}

//Loops

let temperature = [34, 32, 34, 21, 22, 25];
for (let i=0; i<6; i++){
    console.log(temperature[i]);
}

