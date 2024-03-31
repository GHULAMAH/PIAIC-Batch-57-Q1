"use strict";
let a = 2;
let b = 98;
let c = a + b;
let d = "Math" + " Question";
let e = "Addition " + a + b;
let f = a + b + " Answer";
let g = a + b + " Case " + a;
console.log("Answer of", d, "is", c);
console.log(e);
console.log(f);
console.log(g);
let Subt = b - a; // Subtraction
console.log("Subtraction", Subt);
let exp = b ** a; // Exponenent
console.log(exp);
let x1 = 4;
let y2 = 8;
console.log(x1 % y2);
// Assignment Operator
let n = 5;
n += 15; //n + 15 = 20
n++; // increament operator n = n + 1 = 21
n--; // decreament operator n = n -1 = 20
n -= 10; // n = n - 10 = 10
console.log(n);
console.log(n >= 15); // Comparison Operator
//Logical operator || (OR Operator)
// T || T = T
// T || F = T
// F || T = T
// F || F = F
let m = 5;
console.log(m == 5 || m == 8); // True Statement
console.log(m == 8 || m == 20); // False Statement
// && (AND Operator)
// T && T = T
// T && F = F
// F && T = F
// F && F = F
let o = 6;
console.log(o == 6 && o >= 5); // True Statement
console.log(o == 6 && o <= 4); // False Statemnt
// ! (NOT Operator)
// T = F
// F = T
let p = 5;
console.log;
{
    !(p == 5 || p >= 8); // True Statement but will Show False due to not
}
// Conditional Statement (If, Else Condition)
let country = "Pakistan";
let age = 30;
if (country == "Pakistan") {
    console.log("Pakistani");
}
else {
    console.log("Not pakistani");
}
if (age < 30) {
    console.log("Kid");
}
else if (age === 30) {
    console.log("Adult");
}
else
    age > 50;
{
    console.log("OLD");
}
