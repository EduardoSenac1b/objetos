function Pessoa(nome, idade, profissao) {
    nome = nome;
    idade = idade;
    profissao = profissao;
}
  
function coletarDados() {
    const nome = prompt("Qual o seu nome?");
    const idade = prompt("Qual a sua idade?");
    const profissao = prompt("Qual a sua profissão?");
  
    return new Pessoa(nome, idade, profissao);
}
  
const pessoa = coletarDados();
  
console.log(`Nome: ${pessoa.obterDados().nome}`);
console.log(`Idade: ${pessoa.obterDados().idade}`);
console.log(`Profissão: ${pessoa.obterDados().profissao}`);
