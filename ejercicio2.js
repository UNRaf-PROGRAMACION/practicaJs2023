const a = 42;
const b = 24;
const c = 6;

// opcion con logica
if (a > b && a > c) {
    console.log(a+" es el mayor");
} else {
    if (b > c) {
        console.log(b+" es el mayor");
    } else {
        console.log(c+" es el mayor");
    }
}
// opcion con fuerza bruta
if (a > b && a > c) {
    console.log(a+" es el mayor");
}
if (b > a && b > c) {
    console.log(b+" es el mayor");
}
if (c > a && c > b) {
    console.log(c+" es el mayor");
}