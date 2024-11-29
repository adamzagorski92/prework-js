let name='Adam';

name='Monika';

let number1=111;

let boolean = true;

let array = [1,2,3,108];

let objectH1 = document.querySelector('h1');

objectH1.innerText= 'Kurs Java Script';

/* Warunek logiczny */
if(boolean) {
    console.log('Warunek został spełniony');
}

/* Warunek składający się z kilku zależności - sprawdzający (przykład) */
if(number1===108) {
    console.log('Spełniony warunek number === 108');
} else if (number1 === 110) {
    console.log('Spełniony warunek number === 110');
} else {
    console.log('Żaden z powyższych warunków nie został spełniony!');
}

/* Operatory: */

/* OPERATORY ARYTMETYCZNE */
let result1 = number1+2;
let result2 = number1*2;
let result3 = number1/2;
let result4 = number1-2;


/* OPERATORY PORÓWNANIA */
/* '==' ten operator sprawdza czy wartości są takie same
   '===' ten operator sprawdza czy wartości i formaty są takie same */

/* Operator równości - sprawdza czy wartości i formaty są takie same */
   let numberTxt ='101';
if(number1 === numberTxt) {
    console.log('Wartości i formaty zmiennych są równe');
}

/* Operator równości - sprawdza, czy wartości są równe */
if(number1 == numberTxt) {
    console.log('Wartości zmiennych są równe');
}
/* Operator nierówności: sprawdza, czy wartości są nierówne */
if(number1 != numberTxt) {
    console.log('Wartości zmiennych są nierówne');
}
/* Operator nierówności: sprawdza, czy wartości i formaty są nierówne */
if(number1 !== numberTxt) {
    console.log('Wartości i formaty zmiennych są nierówne');
}
let number2 = 110;

/* Operator większości i mniejszości */
if(number1 > number2) {
    console.log('Numer pierwszy jest większy od drugiego');
} else if (number1 < number2) {
    console.log('Numer pierwszy jest mniejszy od drugiego');
} else {
    console.log('Numer pierwszy i drugi są równe');
}

/* Operator większe/mniejsze bądź równe */
if(number1 >= number2) {
    console.log('Numer jeden jest większy bądź równy w stosunku do drugiego');
}
if(number1 <= number2) {
    console.log('Numer jeden jest mniejszy bądź równy w stosunku do drugiego');
}

console.log(name);
console.log(2*number1);
console.log(boolean);
console.log(array);
console.log(objectH1);
console.log(result1, result2, result3, result4);