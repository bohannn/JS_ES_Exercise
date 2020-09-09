// ES5,6,7,(8,9) task before the exam
// Create a JS program, where you just use as many of the first exam features as you 
// can = learn them for the exam

// The business value of the app can be 0
// Create a UI if wish, or just play behind the scenes and print to 
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax

// e.g. class Bill could extend class Cost (with e.g. dueDate and isPaid)

// daily, weekly, monthly, yearly
const costSpan = [  {span:"Daily", days:1},
                    {span:"Weekly", days:7},
                    {span:"Monthly", days:30.45},
                ];

// Then do whatever reports / analysis or so, with all the costs

// JS ES Features
// Variables 1
console.log("*************** JS ES Features *************");
console.log("*************** variables 1 ****************");

var internet;
var electricity;
var water = 20;
var rent = 710;

function variable1_rent(i, e, w) {  //  i = internet, e = electricity, w = water
    "use strict"; 
    // Defines that JavaScript code should be executed in "strict mode".
    // The "use strict" directive was new in ECMAScript version 5.
    // With strict mode, you can not, for example, use undeclared variables.

    var otherfee;
    otherfee = i + e + w;
    console.log("Other fees total " + otherfee + " EUR");

    rent = rent + otherfee;
    // console.log(rent);
}

internet = 0;
electricity = 35;

console.log("\nThe rent does not include other fees is " + rent + " EUR");
console.log("After calculate by the function: ");

variable1_rent(internet, electricity, water);
console.log("Total rent is " + rent + " EUR");


// Variables 2
console.log("\n*************** variables 2 ****************");
rent = 710;

// let
function variable2_rent(i, e, w) {
    "use strict";
    var otherfee;
    let person = 3; 
    // The let statement declares a block-scoped local variable

    if (person > 1) {
        otherfee = i + e + w * 0.9 * person;
        // If more than 1 person live in the apartment, the water fee will be 20 * 0.9 each person
    } else {
        otherfee = i + e + w;
    }

    console.log("Other fees total " + otherfee + " EUR");

    rent = rent + otherfee;
}
// otherfee and person cannot be used outside the function variable2_rent

internet = 0;
electricity = 35;

console.log("\nThe rent does not include other fees is " + rent + " EUR");
console.log("After calculate by the function: ");

variable2_rent(internet, electricity, water);
console.log("Total rent is " + rent + " EUR");

// const
const costs = [ 
    {name:"Food", amount:10, span:costSpan[0]},
];
console.log(costs.length);

const cost = {name:"", amount:0, span:costSpan[0]};
cost.name = "Rent";
cost.amount = rent;
cost.span = costSpan[2];

costs.push(cost);
console.log(costs.length);
console.log(costs);


// Variables 3
console.log("\n*************** variables 3 ****************");

var testarray = [
    false,
    null,
    undefined,
    0,
    NaN,
    '',
    "",
    ``,
    document.all,
    "true",
    "false",
    true,
    " ",
    "abc",
    " abc ",
    "three",
    "-12",
    "0",
    "100",
    310,
    "500",
    "5.20",
    " 1200 ",
    "6.66",
    "6,66",
    /[\u0400-\u04FF]+/g,    
];

for(let i=0; i<testarray.length; i++) {
    
    let input = testarray[i];
    let number = Number(input);

// The correct value should be a number and greater than zero or equal to zero

    if( number >= 0 && !Number.isNaN(number) && input && (typeof(input)==="string" && input.trim().length!==0)) {
        
        if(typeof(testarray[i])==="string") {
            console.log("Correct! The number value is: " + number);
        } else {
            console.log("Correct! The number value is: " + number);
        }
    }

    if( number < 0 || Number.isNaN(number) || (!input && input !==0) || typeof(testarray[i])==="boolean" || (typeof(input)==="string" && input.trim().length===0)) {
        
        if(typeof(testarray[i])==="string") {
            console.log("Error! The input '" + input + "' is wrong input! The number value of the input is: " + number);
        } else {
            console.log("Error! The input '" + input + "' is wrong input! The number value of the input is: " + number);
        }
        
    }
}