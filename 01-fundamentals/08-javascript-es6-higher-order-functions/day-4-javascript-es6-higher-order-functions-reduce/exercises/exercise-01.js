const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(matriz) {
  // escreva seu código aqui
  return matriz.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten(arrays));
