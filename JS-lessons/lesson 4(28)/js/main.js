//first exercise
let myString = "иВан";
myString = myString.toLowerCase();
let firstLatter = myString.charAt(0);
firstLatter = firstLatter.toUpperCase();
myString = myString.slice(1);
firstLatter = firstLatter.concat(myString);


console.log(firstLatter);

//second exersice
let myPrice = "$120";

console.log(myPrice.slice(1));

//third exercise
let fruits = [
  'Яблоко', 
  'Абрикос', 
  'Апельсин'
];

let deletedFruits = [
  fruits[0],
  fruits[2],
];

console.log(fruits);

let firstMessage = "Вы удалили Апельсин";

console.log(firstMessage);
fruits.pop();
console.log(fruits);

let secondMessage = "Вы удалили Яблоко";

console.log(secondMessage);
fruits.shift();
console.log(fruits);

console.log(deletedFruits);