const business = 450;
const minister = 350;
const army = 600;

/*
 if (business > minister) {
    console.log("business person er pola is bigger");
}
else {
    console.log("minister er pola is bigger");
}
 */

/* if (business > minister && business > army) {
    console.log("Business is bigger");
}
else if (minister > business && minister > army) {
    console.log("minister is bigger");
}
else if (army > business && army > minister) {
    console.log("army is bigger");
} */

var max = Math.max(business, minister, army);
// console.log("bigger is", max);

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
};
const largest = findLargest(345, 234);
// console.log(largest);


// task: 1 return bigger number of 3 parameter value(number)
function biggerOf3(numb1, numb2, numb3) {
    if (numb1 > numb2 && numb1 > numb3) {
        return numb1;
    }
    else if (numb2 > numb1 && numb2 > numb3) {
        return numb2;
    }
    else if (numb3 > numb1 && numb3 > numb2) {
        return numb3;
    }
};
const myBigNumb = biggerOf3(2500, 3500, 1500);
console.log(myBigNumb);

function smallestOf3(smNumber1, smNumber2, smNumber3) {
    if (smNumber1 < smNumber2 && smNumber1 < smNumber3) {
        return smNumber1;
    }
    else if (smNumber2 < smNumber1 && smNumber2 < smNumber3) {
        return smNumber2;
    }
    else if (smNumber3 < smNumber1 && smNumber3 < smNumber2) {
        return smNumber3;
    }
};
const mySmallNumber = smallestOf3(2500, 3500, 1500);
console.log(mySmallNumber);