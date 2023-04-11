//Sumar solo los elementos pares de un array.
//Sumar solo los elementos pares de un array.

a.map((item) => {
  if (item % 2 == 0) {
    suma = suma + item;
  }
});

//filter array
//filter array
const a = [2, 5, 6, 1];
let suma = 0;
a.filter((item) => item % 2 == 0).map((item) => {
  suma = suma + item;
});
console.log(suma);

let c = [10, 8, 9, 15, 21, 18, 19];
let sumar = 0;
console.log(c.filter((item) => item >= 15 && item <= 20));

c.filter((item) => item >= 15 && item <= 20).map((item) => {
  sumar = sumar + item;
});

console.log("La suma es " + sumar);
