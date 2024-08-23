const listaDeTarefas = {
    nome: "João",
    tarefas: [
      { descricao: "Estudar para a prova", concluida: false, prioridade: "alta" },
      { descricao: "Limpar o quarto", concluida: false, prioridade: "média" }
    ]
  };

//a)
listaDeTarefas.tarefas.push({descricao: "lavar a louça", concluida:false, prioridades: "média"})

//b)
listaDeTarefas.tarefas[0].concluida = true
