const a = [2, 5, 6, 1];
const b = [2, "hola", false];

a.map((item) => console.log(item));
a.map((item) => {
  console.log(item);
});

// map
// recorre los elemento y los multiplica por 2
a.map((item) => {
  let doble = item * 2;
  console.log(doble);
});

//
let acumulador = 0;
a.map((i) => {
  acumulador = acumulador + i;
});
console.log("la suma es: " + acumulador);

let mayor = 0;
a.map((item) => {
  if (item > mayor) {
    mayor = item;
  }
});
console.log("el mayor es: " + mayor);
