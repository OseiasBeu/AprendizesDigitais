/**
* Crie um programa que simule um ataque do meuPokemon contra o pokemonInimigo.
* O ataque de um pokemon pode causar de 1 à 100 pontos de dano.
*
* Caso o elemento do meuPokemon seja forte contra o elemento do pokemonInimigo,
* o ataque recebe um bônus de 25%. Use a seguinte referência
*
* raio é forte contra água
* água é forte contra fogo
* foto é forte contra planta
* planta é forte contra raio
*
* O programa deve determinar quanto foi o dano causado e se o pokemon inimigo
* foi derrotado (hp 0 ou menor)
*
*/

let tipos = ['raio', 'água', 'fogo', 'planta'];

let meuPokemon = {
  nome: 'Pikachu',
  tipo: tipos[0],
  hp: 100
}

let pokemonInimigo = {
  nome: 'Charmander',
  tipo: tipos[2],
  hp: 100
}
