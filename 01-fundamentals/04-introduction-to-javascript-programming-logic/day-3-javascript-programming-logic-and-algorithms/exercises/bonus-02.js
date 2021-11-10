let n = 6;

divisibleNumbers = [];

for(i = 1; i <= n; i += 1) {
    if(n % i === 0) {
        divisibleNumbers.push(i);
    }
}

if(divisibleNumbers.length === 2) {
    console.log(`O número ${n} é divísivel por ${divisibleNumbers} e é primo.`);
} else {
    console.log(`O número ${n} é divísivel por ${divisibleNumbers} e não é primo.`);
}
