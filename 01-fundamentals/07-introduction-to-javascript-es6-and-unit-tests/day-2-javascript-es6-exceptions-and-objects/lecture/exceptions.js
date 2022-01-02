/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23 */

/* const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum(2, '3')); // resultado: Os valores devem ser numéricos 

// Na prática, a função sum está retornando uma string, e essa não é o objetivo de uma função que soma dois números, certo? Você precisa indicar de alguma forma que ocorreu um erro.  */


const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));

// Percebeu a diferença? Agora a execução da função sum foi interrompida e temos uma mensagem de erro no console, bem como uma indicação da linha onde esse erro ocorre.