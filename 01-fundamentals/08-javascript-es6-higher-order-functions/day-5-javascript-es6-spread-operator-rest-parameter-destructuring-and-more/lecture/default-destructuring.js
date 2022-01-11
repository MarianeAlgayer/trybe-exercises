const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

/* const { nationality } = person;
console.log(nationality); // undefined */

// utilizando default destructuring:
const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
