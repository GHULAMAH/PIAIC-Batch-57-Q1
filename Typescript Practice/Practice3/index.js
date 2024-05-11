"use strict";
//  "Functions"
//1. Decleration of function
//start with the function keyword
// function function name(){ function body}
function _xyz() { }
// function calling
// fucntion namr() i.e. _xyz()
function greet() {
    console.log("Hello Bhai");
    console.log("Yes Hello");
}
greet();
// Passing Parameters in a function
function Hi(gree) {
    console.log("Hello friend", gree);
}
Hi("Ahmad");
// or
function hello(num) {
    console.log("Number is", num);
}
hello(8);
// function with returns statement
function abc() {
    console.log("This is abc function");
    return 100;
}
const z = abc();
console.log(z);
//ARRAYS
// to store multiple values
let fruites = ["apple", "banana", "grapes", "pineapple"];
console.log(fruites);
console.log("Print 1st Value =", fruites[0]);
console.log("Print 2nd Value =", fruites[1]);
console.log("Length of array =", fruites.length);
//Array Methods
// push (value) adds the value at the end
fruites.push("orange");
console.log(fruites);
// pop (value) deletes value from the end
fruites.pop();
console.log(fruites.pop());
console.log(fruites);
// unshift add a value at the start of the array
// shift removes a value at the start of the array
// splice add or remove a value at the mid of the array
// we use index number to add or remove data
fruites.splice(1, 2); // go to index 1 of the array and delete two values
console.log(fruites);
fruites.splice(1, 0, "banana", "grapes", "oranges"); // go tp the index 1 of the array and add next mentioned values
console.log(fruites);
// slice method remove a piece if the array and creates a new array
let num_ = ["a", "b", "c", "d", "e"];
console.log(num_);
const m = num_.slice(1, 4);
console.log("result of slice =", m);
