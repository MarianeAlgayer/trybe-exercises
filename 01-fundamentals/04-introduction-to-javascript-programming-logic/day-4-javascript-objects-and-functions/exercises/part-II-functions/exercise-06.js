function sumOfPreviousNumbers(number) {

    let sum = 0;

    for (let i = 1; i <= number; i += 1) {
        
        sum += i;
    }

    return sum;
}

console.log(sumOfPreviousNumbers(5));