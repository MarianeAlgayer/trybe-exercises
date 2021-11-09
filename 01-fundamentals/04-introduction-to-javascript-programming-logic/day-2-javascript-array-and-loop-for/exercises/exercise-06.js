let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumbers = [];

for(number of numbers) {
    if(number % 2 !== 0) {
        oddNumbers.push(number);
    }
}

if(oddNumbers.length > 0) {
    console.log(`Total de valores ímpares: ${oddNumbers.length}. São eles: ${oddNumbers}.`);
} else {
    console.log('Nenhum valor ímpar encontrado.');
}

/* let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
} */
