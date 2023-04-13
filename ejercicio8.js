// const arr = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// arr.forEach(element => {
//     sum = sum + element;
// });

// sum = arr.reduce((a, b) => a+b,0);

// console.log(sum);










const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random()*100));
}
console.log(arr);
const sum = arr.reduce((a, b) => a+b,0);
console.log(sum);