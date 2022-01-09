const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(namesArr) {
  // escreva seu código aqui
  const letters = namesArr
  .reduce((acc, currName) => acc + currName.split('') + ',', '').toLowerCase();

  let counter = 0;

  for(let i = 0; i < letters.length; i += 1) {
    if (letters[i] === 'a') {
      counter += 1;
    }
  }

  return counter;
}

/* function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
} */

console.log(containsA(names));
