const a = [2, 5, 6, 1];
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
