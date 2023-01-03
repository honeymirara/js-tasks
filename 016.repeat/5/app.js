const num1 = '123';
let num2 = 0;

for (let i = 0; i < num1.length; i++) {
    num2 += +num1[i];
}
console.log(num2);