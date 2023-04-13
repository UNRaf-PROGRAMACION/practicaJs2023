const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random()*100));
}
console.log(arr);
const evens = arr.filter(element => element %2 === 0);
console.log(evens);
const sum = evens.reduce((a, b) => a+b,0);
console.log(sum);