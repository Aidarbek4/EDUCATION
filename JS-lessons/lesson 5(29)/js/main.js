//first exercise
function min() {
  let a = 52;
  let b = 10;
  let x = Math.min(a, b);
  console.log(x);
};

min();
//second exercise
let z = 4;

if (z > 0) {
  console.log(z + 1);
} else {
  console.log(z);
};
//third exercise
function perimeter (a) {
  return a * 4;
};

let squarePerimeter = perimeter(6);
console.log(squarePerimeter);
//fourth exercise
function calc() {
  let c = 12;
  let d = 5;

  if(c > d) {
    console.log(c + d);
  } else if(c < d) {
    console.log(c * d);
  };
};

calc();
console.log('ЗАДАЧА РЕШЕНА');