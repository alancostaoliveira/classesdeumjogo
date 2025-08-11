/**
 * Desafio: Escrevendo as classes de um Jogo
 * O objetivo é criar uma classe que represente um herói
 * e um método que exiba uma mensagem de ataque personalizada
 * conforme o tipo do herói.
 */

// 1. Definição da classe Heroi
class Heroi {
  // O construtor é o método chamado quando criamos um novo objeto (instância) da classe.
  // Ele define as propriedades iniciais do nosso herói.
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo; // pode ser 'guerreiro', 'mago', 'monge', 'ninja'
  }

  // 2. Definição do método atacar
  atacar() {
    let ataque;

    // Usamos uma estrutura de decisão (switch) para determinar o tipo de ataque
    // com base no tipo do herói.
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque indefinido'; // Uma mensagem para tipos não previstos
    }

    // 3. Exibição da mensagem de saída
    // Usamos template literals (crases ``) para construir a string final de forma mais legível.
    console.log(`o ${this.tipo} atacou usando `);
  }
}

// --- Demonstração de Uso ---

// Criando instâncias (objetos) da classe Heroi
const mago = new Heroi('Gandalf', 150, 'mago');
const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
const monge = new Heroi('Aang', 112, 'monge');
const ninja = new Heroi('Naruto', 17, 'ninja');

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
