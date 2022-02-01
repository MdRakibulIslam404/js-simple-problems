// Swap variable
var first = 5;
var second = 7;
// console.log(first, second);

var temp = first;
first = second;
second = temp;
console.log(first, second);

// destructing
var firstNum = 2;
var secNum = 4;
[firstNum, secNum] = [secNum, firstNum];
console.log(firstNum, secNum);