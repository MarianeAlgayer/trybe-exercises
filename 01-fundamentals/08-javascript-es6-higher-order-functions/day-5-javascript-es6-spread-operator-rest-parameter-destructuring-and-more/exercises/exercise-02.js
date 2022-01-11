const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);

console.log(sum(10, 20, 30)); //60
