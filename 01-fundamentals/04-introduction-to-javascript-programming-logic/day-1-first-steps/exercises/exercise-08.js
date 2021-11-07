const num1 = 3;
const num2 = 5;
const num3 = 2;

/* if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
} */

let isEven = false;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    isEven = true;
}

console.log(isEven);
