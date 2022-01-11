// Faça uma lista com as suas frutas favoritas
const specialFruit = ['strawberry', 'banana', 'blackberry'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['condensed milk'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const preparedFruitSalad = [...fruit, ...additional];
  return preparedFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));