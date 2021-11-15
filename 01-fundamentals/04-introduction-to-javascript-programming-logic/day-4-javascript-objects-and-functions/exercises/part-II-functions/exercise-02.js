function highestNumberKey(numbers) {

    let highestNumber = numbers[0];
    let highestNumberKey = 0;

    for(let key in numbers) {
        if(numbers[key] > highestNumber) {
            highestNumber = numbers[key];
            highestNumberKey = key;
        }
    }

    return highestNumberKey;
}

console.log(highestNumberKey([2, 3, 6, 7, 10, 1]));
