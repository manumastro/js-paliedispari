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
  
  for(let i = str.length - 1; i >= 0; i--){
    reverseString += str[i];
  }
  return reverseString;
}