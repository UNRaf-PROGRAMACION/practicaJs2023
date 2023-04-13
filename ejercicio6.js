const number1 = 100;
const number2 = 20;

if (number1<number2) {
    for (let i = number1 + 1; i < number2; i++) {
        console.log(i);
    }
} else {
    for (let i = number1 - 1; i > number2; i--) {
        console.log(i);
    }
}