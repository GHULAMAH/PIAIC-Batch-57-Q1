"use strict";
// Q1
console.log("Hello, World");
//Q2
let temprature = 10;
if (temprature < 20) {
    console.log("Its Cold");
}
//Q3
let apple = 10;
if ((apple -= 3)) {
    console.log(apple);
}
//Q4
let firstname = "Ghulam";
let lastname = "Ahmad";
let fullname = firstname + " " + lastname;
console.log(fullname);
//Q5
let m = 5;
if (m > 3) {
    console.log("Yes");
}
else {
    console.log("No");
}
//Q6
function calculateArea(radius = 5) {
    let area = 2 * 3.14 * (radius * radius);
    console.log(area);
}
calculateArea();
//Q7
for (let num = 1; num <= 50; num++) {
    console.log(num);
    if (num % 3 == 0) {
        console.log("Fizz");
    }
    else if (num % 5 == 0) {
        console.log("Buzz");
    }
}
//Q8
let temperatures = [37, 43, 53, 85, 34, 93, 104];
let highest = temperatures[0];
for (let p = 0; p < temperatures.length; p++) {
    if (temperatures[p] >= highest) {
        highest = temperatures[p];
    }
}
console.log("Max Temprature is", highest);
//Q9
let age = 36;
if (age < 18) {
    console.log("Minor");
}
else {
    console.log("Adult");
}
//Q10
const numberArrays = [1, 2, 8, -5, -9, 20, 0, 344];
const checkNumberPositive = (numberArray) => {
    let count = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] >= 0) {
            count = count + 1;
        }
    }
    return count;
};
console.log("count", checkNumberPositive(numberArrays));
//Q11
let word = ["Ali", "Noman", "Mohsin", "Ahmad", "Kamran", "Akram"];
function wordsStartingWithA(words) {
    const wordsWithA = words.filter((word) => word.toUpperCase().startsWith("A"));
    return wordsWithA;
}
const wordsStartingWithAArray = wordsStartingWithA(word);
console.log("Words starting with 'A':", wordsStartingWithAArray);
//Q12
let fruites = ["Apple", "Grapes", "Banana", "Orange"];
let secondtolast = fruites[fruites.length - 2];
console.log("Second to Last Fruite is", secondtolast);
