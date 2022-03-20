const randomNumber = () => Math.round(Math.random() * 100);

const toUpperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string.split('')[0];

const concatenate = (string1, string2) => `${string1} ${string2}`;

module.exports = { 
  randomNumber,
  toUpperCase,
  firstLetter,
  concatenate
};
