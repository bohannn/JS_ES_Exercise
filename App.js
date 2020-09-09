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
const costSpan = [  
    {span:"Daily", days:1},
    {span:"Weekly", days:7},
    {span:"Monthly", days:30.45},
];

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


// Object 1
console.log("\n*************** object 1 *******************");

{
    let first = "firstname";
    let last = "lastname";

    let firstlast = {first, last}; 
    // {a:"firstname", b:"lastname"}
    // let ab = {a:a, b:b} same result as above
    console.log(firstlast);

    let name = {[first]:"Bohan", [last]:"Liu"}; 
    // {firstname: "Bohan", lastname: "Liu"}
    // [a] is called computed property name (ES6) 
    console.log(name);

    let info = {...name, age: 24};
    // {firstname: "Bohan", lastname: "Liu", age: 24}
    // ...name means copy all names and values in object name
    console.log(info);

    let arr1 = [1, 3, 5, 7, 9];
    let arr2 = arr1;
    let arr3 = [...arr1];
    let arr4 = [...arr1, 11];
    let arr5 = [...arr1, ...arr1];
    let arr6 = [...arr1, arr1];
    // arr6 = [1, 3, 5, 7, 9, [1, 3, 5, 7, 9]]
    // The sixth element of arr6 is an array not a number

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    console.log(arr5);
    console.log(arr6);
    console.log(arr6[5]);

    let monthcost1 = {rent: 799, food: 300, transport: 32};
    console.log(monthcost1);

    let monthcost2 = {...monthcost1};
    console.log(monthcost2);
    monthcost2.food = 270;
    console.log(monthcost2);

    let monthcost3 = {...monthcost1, transport: 32.5};
    // Change the type of transport from int to float
    console.log(monthcost3);

    let monthcost4 = {...monthcost1, entertainment: 150, phonebill: 19.9};
    // Add new name and value
    console.log(monthcost4);
}


// Object 2
console.log("\n*************** object 2 *******************");

{
    let cost1 = {rent: 799, food: 300, transport: 32.5, entertainment: 150, phonebill: 19.9};
    console.log(cost1);

    const {rent, food, transport, entertainment, phonebill} = cost1;
    /*  
    const rent = cost1.rent;
    const food = cost1.food;
    const transport = cost1.transport;
    const entertainment = cost1.entertainment;
    const phonebill = cost1.phonebill; 
    // Same as above
    */
    console.log(cost1);
    console.log("Rent is " + rent + " EUR");
    console.log("Total cost is " + (rent + food + transport + entertainment + phonebill) + " EUR");

    let cost2 = {rent, food, transport, entertainment, phonebill};
    console.log(cost2);

    // let cost3 = {rent, food, transport, entertainment, phonebill, gym};
    // console.log(cost3);
    // This will show gym is not defined!

    let cost4 = [799, 300, 32.5, 150, 19.9];
    console.log(cost4);

    const [rent1, food1, transport1, entertaiinment1, phonebill1] = cost4;
    console.log(cost4);
    console.log("Total cost is " + (rent1 + food1 + transport1 + entertaiinment1 + phonebill1));
}
