/*
1. evento scatenato dal click del bottone
2. leggere la parola inserita nel campo input
3. girarla e verificare se è palindroma
4. stampare l'output
*/

document.getElementById('verifica').addEventListener('click', initVerifica);

function initVerifica(){
  const parola = document.getElementById('parola').value;
  const parolaGirata = giraParola(parola);
  
  let outputMsg;
  if(parola.toLowerCase() === parolaGirata.toLowerCase()){
    outputMsg = `La parola "${parola}" è palindroma`;
  }else{
    outputMsg = `La parola "${parola}" non è palindroma`;
  }
  document.getElementById("output-palindroma").innerHTML = outputMsg;
}

function giraParola(str){
  let reverseString = '';
  
  console.log(str.split('').reverse().join(''));

  for(let i = str.length - 1; i >= 0; i--){
    reverseString += str[i];
  }
  return reverseString;
}






///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/*
PARI DISPARI

1. Scegliere pari o dispari dalla select 
2. Giocare un numero da 1 a 5
3. Fare estrarre al pc un numero random da 1 a 5
4. Verificare il vincitore

*/

document.getElementById('gioca').addEventListener('click', initPariDispari);

function initPariDispari(){
  const userChoice = document.getElementById('choice').value;
  const userNumber = parseInt(document.getElementById('numero').value);
  const pcNumber = getRandomNumber(1, 5);
  const sum = userNumber + pcNumber;
  let outputMsg;
  if(userChoice === pariDispari(sum)){
    outputMsg = `
    <h3>Hai vinto</h3>
    <p>Hai giocato <strong>${userNumber}</strong> e scelto <strong>${userChoice}</strong> </p>
    <p> il PC ha giocato: <strong>${pcNumber}</strong></p>
    `;
  }else{
    outputMsg = `
    <h3>Hai vinto</h3>
    <p>Hai giocato <strong>${userNumber}</strong> e scelto <strong>${userChoice}</strong> </p>
    <p> il PC ha giocato: <strong>${pcNumber}</strong></p>
    `;
  }
  document.getElementById("output-paridispari").innerHTML = outputMsg;
}
/**
 * Generatore di numeri random
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * filtro pari/dispari
 * @param {number} n 
 * @returns 
 */
function pariDispari(n){
  if(n % 2) return 'dispari';
  return 'pari';
}




