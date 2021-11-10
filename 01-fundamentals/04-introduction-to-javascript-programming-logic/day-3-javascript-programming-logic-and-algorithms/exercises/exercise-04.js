let n = 5;

if(n > 1) {
    for(index = 1; index <= n; index += 1){
        if(index % 2 !== 0 && index < n) {
            console.log(`${' '.repeat((n - index) / 2)}${'*'.repeat(index)}`);
        } else if(index % 2 !== 0 && index === n) {
            console.log('*'.repeat(index));
        }
    }
}

/* let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
} */
