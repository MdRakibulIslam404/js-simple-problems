// negative to positive
const myNumber = -5;
const output = Math.abs(myNumber);
// console.log(output);

// float to integer
const number = 34.009873;
const outPut = Math.ceil(number);
// console.log(outPut);

const numb = 98.9998;
const out = Math.floor(numb);
// console.log(out);

const rNum = 45.79;
const put = Math.round(rNum);
// console.log(put);

// random number
const numm = Math.random();
// console.log(numm);

const nRand = Math.random() * 10;
// console.log(nRand);

/* const rounded = Math.random() * 12;
const roundWithOutFloat = Math.floor(rounded);
console.log(roundWithOutFloat); */

for (let i = 0; i <= 20; i++) {
    const rounded = Math.random() * 6;
    const roundWithOutFloat = Math.round(rounded);
    console.log(roundWithOutFloat);
};