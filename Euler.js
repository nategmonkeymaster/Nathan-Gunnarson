// let currentVal = 0;
// let adjustVal = 0;

//%

let sum = 0;
let i = 0;
for (i = 0; i <= 1000; i++) {

    if (i % 3 || i % 5){
        sum += i
    }
}
console.log(sum);