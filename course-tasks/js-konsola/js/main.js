/* Pierwszy sposób */

console.log("Uwielbiam JavaScript");

/* Drugi sposób - pobieram za pomocą metody identyfikacji obiektu za pomocą ID */
let htmlParagraph = document.getElementById('myParagraph').textContent;

console.log(htmlParagraph);

/* Trzeci sposób - pobieram za pomocą metody identyfikacji obiektu za pomocą selektora */
let htmlParagraph2 = document.querySelector('p').textContent;

console.log(htmlParagraph2);

