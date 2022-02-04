// problem 1 ; lowest number in an Array \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function lowestNum(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const mySmall = lowestNum([12, 45, 78, 9, 34, 21, 20]);
// console.log(mySmall);

// problem 2 ; lowest number from 3 numbers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function low3(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else if (num3 < num1 && num3 < num2) {
        return num3;
    }
};
const low = low3(233, 435, 132);
// console.log(low);

// problem 3 ; Average (গড়) number of an Array \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function averageNUm(numbs) {
    let sum = 0;
    for (let i = 0; i < numbs.length; i++) {
        let element = numbs[i];
        sum = element + sum;
    }

    return sum / numbs.length;
};
const averageResult = averageNUm([2, 3, 5, 8, 10]);
// console.log("Average is", averageResult);

// problem 4 ; input Rectangle height and width and get area(আয়তন)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function rectangleArea(height, width) {
    let area = height * width;
    return area;
};
const height = 30;
const width = 50;
const areas = rectangleArea(height, width);
// console.log(areas);

// problem 5 ; find 2nd largest Number in an Array
function secondLargest(numbers) {
    let largestNum = numbers[0];
    let secondLargestNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i]
        if (element > largestNum) {
            secondLargestNum = largestNum;
            largestNum = element;
        }
        else if (element > secondLargestNum) {
            secondLargestNum = element;
        }
    }
    return secondLargestNum;
}
const myNums = secondLargest([12, 45, 20, 87, 123, 167, 244, 12, 20]);
console.log(myNums);