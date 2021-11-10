let n = 5;

if (n > 1) {
    for(index = 1; index <= n; index += 1) {
        console.log(`${' '.repeat(n - index)}${'*'.repeat(index)}`);
    }
}

/* let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
} */
