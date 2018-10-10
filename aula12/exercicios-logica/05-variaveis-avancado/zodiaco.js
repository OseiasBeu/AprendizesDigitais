/**
 * Escreva um programa que determina o signo do zodíaco da pessoa usando
 * o dia e o mês de seu nascimento. O mapa com os signos está informado abaixo.
 * O dia e o mês do nascimento devem ser informados pelo terminal.
 * 
 * Ex: Uma pessoa nascida em janeiro até o dia 19 pertence ao signo de Capricórnio.
 * Se ela nasceu no dia 20 ou depois, ela é de Aquário.
 */

let meses = [
    null,
    { mudanca: 20, antes: 'Capricórnio', depois: 'Aquário'},
    { mudanca: 18, antes: 'Aquário', depois: 'Peixes'},
    { mudanca: 21, antes: 'Peixes', depois: 'Áries'},
    { mudanca: 20, antes: 'Áries', depois: 'Touro'},
    { mudanca: 20, antes: 'Touro', depois: 'Gêmeos'},
    { mudanca: 21, antes: 'Gêmeos', depois: 'Câncer'},
    { mudanca: 23, antes: 'Câncer', depois: 'Leão'},
    { mudanca: 23, antes: 'Leão', depois: 'Virgem'},
    { mudanca: 23, antes: 'Virgem', depois: 'Libra'},
    { mudanca: 23, antes: 'Libra', depois: 'Escorpião'},
    { mudanca: 22, antes: 'Escorpião', depois: 'Sagitário'},
    { mudanca: 22, antes: 'Sagitário', depois: 'Capricórnio'}
];