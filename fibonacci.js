// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, .........

/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
119th = 118th + 117th
nth = (n - 1)th + (n - 2)th
ith = (i - 1)th + (i - 2)th
 */


// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     // ith = (i - 1)th + (i - 2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// // console.log(fibo);


// fibonacci with function \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/* function fibonacci(numb) {
    fibo = [0, 1];
    for (let i = 2; i <= numb; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const myFibo = fibonacci(6);
console.log(myFibo); */


// with error handling \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function fibonacci(numb) {
    if (typeof (numb) != "number") {
        return "please give a number"
    }
    else if (numb < 2) {
        return "please enter a number greater than 1"
    }
    else {
        fibo = [0, 1];
        for (let i = 2; i <= numb; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo;
    }
}
const myFibo = fibonacci(12);
console.log(myFibo);
