let firstNumber = 6;
let secondNumber = 9;

function sum(arg1,arg2) {
    let result = arg1+arg2;

    return result;
}

let firstSum = sum(firstNumber,secondNumber);
let secondSum = sum(firstNumber*2,secondNumber*firstNumber);

console.log(firstSum);
console.log(secondSum);