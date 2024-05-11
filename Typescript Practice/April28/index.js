"use strict";
// LOOPS
//1. do while        (runs once before checking the condition)
//2.  while          works with a condition always before running
//3.  FOR
//FOR LOOP
//for(exp1; exp2; exp3) {body}
// exp1 : startig condition normally a variable (let variable = 0)
// exp2 : ending condition (variable <5)
// exp3 : changes the value of the starting condition either increament or decreament
for (let x = 0; x <= 10; x++) {
    console.log("For Loop", x);
}
let array = ["a", "b", "c", "d", "e"];
for (let m = 0; m < array.length; m++) {
    console.log("Array Value", array[m]);
}
