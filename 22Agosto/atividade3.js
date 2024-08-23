function obterInformacoes() {
    const nome = prompt("Qual é o seu nome?");
    const idade = prompt("Qual é a sua idade?");
    const profissao = prompt("Qual é a sua profissão?");

    const usuario = {
        nome: nome,
        idade: idade,
        profissao: profissao
    };
    
    console.log(usuario);
}

obterInformacoes();
