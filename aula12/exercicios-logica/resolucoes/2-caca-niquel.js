
/**
  1- Crie um programa que sorteie um dos valores presentes no vetor 'valores'
  2- Repita esse sorteio 3 vezes e verifique se os valores sorteados são iguais.

  Caso sejam, o jogador venceu o jogo. Exemplos de mensagens no console:
    Os valores sorteados foram banana, banana e pera. Você perdeu!
    Os valores sorteados foram banana, banana e banana. Você venceu!
*/

let valores = ['maçã', 'banana', 'pera', '7'];

let sorteio1 = Math.floor(Math.random() * 4);
let valor1 = valores[sorteio1];

let sorteio2 = Math.floor(Math.random() * 4);
let valor2 = valores[sorteio2];

let sorteio3 = Math.floor(Math.random() * 4);
let valor3 = valores[sorteio3];

let resultado;

if(valor1 === valor2 && valor1 === valor3){
  resultado = 'venceu';
}else{
  resultado = 'perdeu';
}

console.log(`Os valores sorteados foram ${valor1} ${valor2} ${valor3}. Você ${resultado}!`);
