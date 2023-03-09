

var botaoResultado = document.getElementById("resultado");

var aux, i, j;
var tamanho = 6;
var numeros = [];


function sorteiaNumero() {
  return Math.round(Math.random() * 60);
}


function preencheValores() {
  for(i = 0; i < tamanho; i++) {
    aux = sorteiaNumero();
    for(j = 0; j < tamanho; j++) { 
      if(aux == numeros[j] && j != i) {
        aux = sorteiaNumero(); 
      } else {
        numeros[i] = aux;
      }
    }
  }
}


function ordena() {
  for(i = 0; i < numeros.length; i++) {
    for(j = i+1; j < numeros.length; j++) {
      if(numeros[i] > numeros[j]) {
        aux = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] = aux;
      }
    }
  }
  document.write("Resultado do sorteio: " + numeros);
}


function executar() {
  preencheValores();
  ordena();
}


botaoResultado.onclick = executar;