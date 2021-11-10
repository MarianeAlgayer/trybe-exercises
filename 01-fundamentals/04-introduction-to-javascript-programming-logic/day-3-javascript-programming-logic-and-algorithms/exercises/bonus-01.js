let n = 7;

for(index = 1; index <= n; index += 1) {
    if(index % 2 !== 0 && index > 1 && index < n) {
        console.log(`${' '.repeat((n - index) / 2)}*${' '.repeat(index - 2)}*`);
    } else if(index === 1) {
        console.log(`${' '.repeat((n - 1) / 2)}*`)
    } else if(index === n) {
        console.log('*'.repeat(n))
    }
}

/* let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
} */
