const num1 = 2;
const num2 = 4;
const num3 = 7;

/* isOdd = true;

if(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {
    isOdd = false;
} */

isOdd = false;

if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    isOdd = true;
}

console.log(isOdd);
