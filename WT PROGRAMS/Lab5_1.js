const prompt = require("prompt-sync")();

let a = parseInt(prompt("Enter the first number : - "));

let b = parseInt(prompt("Enter the second number : - "));

let o = parseInt(prompt("Enter the operation to perform : - "));

let res = 0;

if (o == '+') {
    res = a + b;
} 
else if(o == '-') {
    res = a - b;
}
else if (o == '*') {
    res = a * b;
}
else if (o == '/') {
    res = a / b;
}

console.log(res);