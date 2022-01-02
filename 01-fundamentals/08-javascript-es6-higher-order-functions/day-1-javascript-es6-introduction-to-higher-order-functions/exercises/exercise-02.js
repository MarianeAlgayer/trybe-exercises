const drawResult = (betNumber, callback) => {
  const drawnNumber = Math.floor(Math.random() * 5) + 1;
  console.log(`Número sorteado: ${drawnNumber}`);

  return callback(betNumber, drawnNumber);
};

const checkNumber = (betNumber, drawnNumber) => {
  if (betNumber === drawnNumber) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
};

console.log(drawResult(4, checkNumber))
