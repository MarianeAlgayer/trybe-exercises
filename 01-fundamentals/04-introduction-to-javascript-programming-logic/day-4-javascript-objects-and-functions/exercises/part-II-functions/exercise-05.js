function integerCount(numbers) {

    let higherCount = 0;
    let integerWithMoreRepetitions = 0;

    for (let i = 0; i < numbers.length; i += 1) {

        let count = 0;

        for (let number of numbers) {

            if (numbers[i] === number) {

                count += 1;
            }
        }

        if (count > higherCount) {

            integerWithMoreRepetitions = numbers[i];
            higherCount = count;
        }
    }

    return integerWithMoreRepetitions;
}

console.log(integerCount([2, 3, 2, 5, 8, 2, 3]));