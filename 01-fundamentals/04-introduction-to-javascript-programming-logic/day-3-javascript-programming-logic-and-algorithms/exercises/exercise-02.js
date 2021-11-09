let n = 5;

if(n > 1) {
    for(index = n - 1; index >= 0; index -= 1) {
        console.log('*'.repeat(n - index));
    }
}

/* let symbol = '*';
let inputLine = '';

for(let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
    console.log(inputLine);
    inputLine = inputLine + symbol;
}
 */
