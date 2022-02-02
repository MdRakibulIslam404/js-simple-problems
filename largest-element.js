// Find the largest element of an array\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}
const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
// console.log(oldest);

const old = largestElement([-12, -6, -17]);
// console.log(old);

// Find the lowest element of an array\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const low = [12, 45, 10, 56];
const lowNumb = lowestElement(low);
console.log(lowNumb);

const lowestMinus = lowestElement([-45, -22, -14, -67, -34]);
console.log(lowestMinus);