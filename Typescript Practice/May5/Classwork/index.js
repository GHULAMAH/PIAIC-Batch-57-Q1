"use strict";
// // How to creat a Node Project
Object.defineProperty(exports, "__esModule", { value: true });
// Method 1
// nmp init (to create node project will ask questions)
/* Press ^C at any time to quit.
package name: (practice1) hello-world
version: (1.0.0)
description: Node project practice May 05 2024
entry point: (index.js) index.ts
test command:
git repository:
keywords:
author: GA
license: (ISC) */
// Method 2  (default values)
// npm inint -y
// 1. JSON (Java Scripts Object Notation)
// 2. Syntax Error
// lett name = "Ahmad";
//3. Type Error
// console.logg(name);
console.log("Hello");
let name = "Ahmad";
console.log(name);
// we use export{} in the end so that variable defined in other programs or files do not create error
//4. Assignability Error
// like when we try to assign different data type to same variable
// 5. Strong Typing
// Implicit
// based on assign value(judge the type)
// let _Name = "Ghulam";
// let _Name = 56;       ERROR as we cannot assign number in previously having string
// Explicit
// Strong typing, where we define the type of a variable or object in the code
// let age: number = 36;        we have defined the data type to be stored in the variable
let z = 6;
if (true) {
    let z = 4;
    console.log(z);
}
else {
    let z = "string";
    console.log(z);
}
console.log(z);
