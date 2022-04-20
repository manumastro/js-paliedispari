/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input */


const output = document.getElementById("palindromo");


let word = prompt("Inserire una parola");

let wordReverse = reverseFunction(word);

if(word == wordReverse){
  output.innerHTML = "la parola è palindroma";
}else{
  output.innerHTML = "la parola non è palindroma";
}

function reverseFunction(stringa){
  let stringaInversa = stringa.split('').reverse().join('');
  return stringaInversa;
} 


/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input
 */

const pariDispariUser = prompt("Scegli pari o dispari");
const numUser = parseInt(prompt("Inserire un numero da 1 a 5"));

let numPC = numPcRandom();


let pariDispariSomma = pariDispariSommaFunction();


if(pariDispariUser === pariDispariSomma){
  console.log("Hai vinto");
}
else{
  console.log("Hai perso");
}

function pariDispariSommaFunction(){
  let sum = numUser + numPC;
  if(sum % 2 === 0){
    return 'pari';
  }else{
    return 'dispari';
  }
}

function numPcRandom(){
  let random = Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
  return random;
}
