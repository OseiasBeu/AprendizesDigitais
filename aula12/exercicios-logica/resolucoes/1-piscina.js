/**
 * 1- Crie um programa que utilize as 3 dimensões de uma piscina para
 * calcular quantos litros de água ela comporta. (1000 litros = 1m³)
 *
 * 2- Faça com que o programa imprima o resultado de forma amigável.
 * Ex:
 *      A piscina comporta 50000 litros de água
 */

let comprimento = 10;
let largura = 4;
let profundidade = 2;

let volume = comprimento * largura * profundidade;

let litros = volume * 1000;

console.log(`A piscina comporta ${litros} litros de água`);
