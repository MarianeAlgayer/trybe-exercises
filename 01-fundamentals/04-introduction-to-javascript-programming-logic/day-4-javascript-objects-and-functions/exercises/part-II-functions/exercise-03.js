function lowestNumberKey(numbers) {

    let lowestNumber = numbers[0];
    let lowestNumberKey = 0;

    for(let key in numbers) {
        if(numbers[key] < lowestNumber) {
            lowestNumber = numbers[key];
            lowestNumberKey = key;
        }
    }

    return lowestNumberKey;
}

console.log(lowestNumberKey([2, 4, 6, 7, 10, 0, -3]));
