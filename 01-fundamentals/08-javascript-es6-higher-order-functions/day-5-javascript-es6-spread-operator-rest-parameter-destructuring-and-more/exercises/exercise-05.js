const myList = [1, 2, 3];
/* const [first, second, third] = myList; */

const swap = ([first, second, third]) => [third, second, first];

console.log(swap(myList));
