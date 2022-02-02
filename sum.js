const numbers = [44, 23, 34, 32, 54, 5, 78];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    sum = element + sum;
}
console.log(sum);

// with function
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = element + sum;
    }
    return sum;
};
const total = arrayTotal([32, 45, 67]);
console.log(total);