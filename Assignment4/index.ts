// Q1. Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greet = "Hello, World";
console.log(greet);

// Q2. Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.

let num1 = 5;
let num2 = 4;
console.log("Addition", num1 + num2);
console.log("Subtraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Division", num1 / num2);
console.log("Modulus", num1 % num2);

//Q3. Instructions: Swap the values of two variables without using a third variable.
let a = 20;
let b = 15;
console.log("Before", a, "and", b);
[a, b] = [b, a];
console.log("After", a, "&", b);

// Q4. Instructions: This applies to TypeScript. Create a string variable and try changing its type.

let _vari: string = "String";
// _vari = 17;
/* Type 'number' is not assignable to type 'string'.ts(2322)
let _vari: string */
console.log(_vari);

// Q5. Instructions: Use the modulus operator to find the remainder of two numbers.
let x = 80;
let y = 32;
console.log("Modulus Operator Result", x % y);

// Q6. Instructions: Increment a variable's value by 1 using two different methods.

let _inc = 17;
console.log("Actual Value = ", _inc);
_inc++;
console.log("Method 1 Result = ", _inc);
_inc += 1;
console.log("Method 2 Result = ", _inc);

// Q7. Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.

let m: boolean = true;
let n: boolean = false;
let o: boolean = true;
console.log("AND ", m && o);
console.log("OR ", m || n);
console.log("NOT ", !o);

// Q8. Instructions: Show examples of using compound assignment operators.
let k = 5;
console.log("Actual Value =", k);
k += 3;
console.log("Using +=3, Result", k);
k -= 2;
console.log("Using -=2, Result", k);
k *= 2;
console.log("Using *=2, Result", k);
k /= 4;
console.log("Using /=4, Result", k);

// Q9. Instructions: Write a program to check if a number is even or odd.

let z = 24;
if (z % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

// Q10. Instructions: Check if a person is eligible to vote.

let age = 31;
if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}

//Q11. Instructions: Assign a grade based on a numerical score.//

let marks = 80;
if (marks >= 85 && marks <= 100) {
  console.log("Student achieved A Grade");
} else if (marks >= 80 && marks <= 84) {
  console.log("Studend achieved B Grade");
} else if (marks >= 70 && marks <= 79) {
  console.log("Student achieved C Grade");
} else if (marks >= 60 && marks <= 69) {
  console.log("Student achieved D Grade");
} else if (marks >= 33 && marks <= 59) {
  console.log("Student achieved E Grade");
} else if (marks >= 1 && marks <= 32) {
  console.log("Student is Fail");
} else {
  console.log("Invalid Input, Please enter Valid Marks");
}

// Q12. Instructions: Find the maximum of three numbers

let a1 = 61;
let b2 = 12;
let c2 = 37;
let max = Math.max(a1, b2, c2);
console.log("Maximum Digit is", max);

//Q13. Instructions: Check if a given year is a leap year

let year = 2024;
if (year % 4 == 0) {
  console.log(year, "is a Leap Year");
} else {
  console.log(year, "is not a leap year");
}

//Q14. Instructions: Write a program that converts temperature from Fahrenheit to Celsius

let fahr = 155;
let cel = ((fahr - 32) * 5) / 9;
console.log("Temperature in Celsius is", cel);

// Q15. Instructions: Check if a number is positive, negative, or zero.

let q = 18;

if (q >> 0) {
  console.log("Number is Positive");
} else if (q << 0) {
  console.log("Number is Negative");
} else {
  console.log("Nunber is Zero");
}

//Q16. Instructions: Write a program that prints the multiplication table of a given number up to 10.

let table = 5;
console.log("5*1=", table * 1);
console.log("5*2=", table * 2);
console.log("5*3=", table * 3);
console.log("5*4=", table * 4);
console.log("5*5=", table * 5);
console.log("5*6=", table * 6);
console.log("5*7=", table * 7);
console.log("5*8=", table * 8);
console.log("5*9=", table * 9);
console.log("5*10=", table * 10);
