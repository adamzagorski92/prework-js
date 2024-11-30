let button = document.querySelector('button');

/* 
    #The first way

    button.onclick = function(){alert("Klik działa!")}; 
*/ 


// #The second way

function clickWorks() {
    alert("Klik działa!S");
}

button.onclick = clickWorks;

// DODATKOWE FUNKCJE -for fun - edukacja z chat gpt
/* 
    Czy tak się robi? Jakie tu są dobre praktyki?
*/

// Funkcja powiększająca przycisk
/* 
    Metoda "style" modyfikuje CSS
*/
function enlargeButton() {
    button.style.transform = 'scale(1.2)'; // Powiększenie o 20%
    button.style.transition = 'transform 0.3s'; // Płynna animacja
    button.style.background = 'yellow'; // zmienia kolor przycisku na żółty
}

// Funkcja przywracająca rozmiar
function resetButtonSize() {
    button.style.transform = 'scale(1)'; // Powrót do normalnego rozmiaru
    button.style.background = ''; // przywraca domyślny kolor
}

// Dodanie obsługi zdarzeń
/* addEventListener to metoda nasłuchiwania różnych zdarzeń ze strony,
    które podjął użytkownik dokonując interakcji z tą stroną 
*/
button.addEventListener('mouseover', enlargeButton); // Najechanie kursorem
button.addEventListener('mouseout', resetButtonSize); // Opuszczenie kursora


