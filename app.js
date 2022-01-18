//Exercise #1
//You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]

// Part 1
// Write a function to insert a name to the end of the list. Add your own name to the end of the list.
var names = ["Maria", "Antony", "Joy", "Juan"];
var newName = prompt("Enter your name");

function insertEnd(newName){
    names.push(newName);
}

insertEnd(newName);
console.log(names);

//Part 2
//Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.
var findName = prompt("Enter a name to find");

function checkName(findName){
    console.log(names.includes(findName));
}

checkName(findName);

//Part 3
//Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.


//Part 4
//Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function

//Exercise #2
//What do the following expressions evaluate to?
console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

//Exercise #3
//Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.
function range(numberRange){
    if (numberRange >= 0 && numberRange <= 25){
        console.log(numberRange + " is between 0 and 25");
    } else if (numberRange > 25 && numberRange <= 100){
        console.log(numberRange + " is between 26 and 100");
    } else if (numberRange > 100){
        console.log(numberRange + " is greater than 100");
    } else if (numberRange < 0){
        console.log(numberRange + " is less than 0");
    } else {
        console.log("Incorrect value");
    }
}

range(parseInt(prompt("Enter a number")));

//Additional Exercises
//What is shown on the console when f is console.log'd?
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f); //output 4