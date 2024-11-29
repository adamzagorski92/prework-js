let name='Adam';

name='Monika';

let number1=111;

let number2 = 110;

let result1 = number1+2;

let numberTxt ='101';

let boolean = true;

let array = [1,2,3,108];

let objectH1 = document.querySelector('h1');

objectH1.innerText= 'Kurs Java Script';

/* Funkcje - mogą być wykorzystywane wiele razy w kodzie
1. W pierwszej kolejności piszesz definicję funkcji
2. Następnie należy ją wywołać - bo sama się nie pokaże :) */

/* DEFINICJA FUNKCJI - przykład */
function multiply(num1,num2,num3) {
    let result= num1*num2+num3;

    return result;
} 

/* Pierwszy sposób wyświetlenia wyniku funkcji 
1. Ten sposób funkcji wydaje się bardziej optymlany, jesli wynik będę
wykorzystywał jeden raz */
console.log(multiply(2,3,4));

/* Drugi sposób wyświetlenia wyniku funkcji
1. Ten sposób wydaje sie bardziej optymalny, jeśli wynik będę wykorzystywał
wieloktronie */

let wynikMnożenia = multiply(108,2,100);
console.log(wynikMnożenia);

/* Mogę podstawiać zmienne pod wartości funkcji
Ma to sens, jeśli te zmienne będą ulegały zmianie w czasie z różnych powodów
Na przykład może się to przydać w grach? */

let wynikMnożenia2 = multiply(number1,2,number2);

console.log(wynikMnożenia2);

/* Funkcja do aktualizowania głównego nagłówka strony (tytułu) */

function updateTitle(newTitle) {
    const title = document.querySelector('h1');
    title.textContent = newTitle;
}
updateTitle('Hello, World!');

console.log(updateTitle);


/* console.log(name);
console.log(2*number1);
console.log(boolean);
console.log(array);
console.log(objectH1); */