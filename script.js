let tarefas = [];

console.log(tarefas)

function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");

  const tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");

  if (tarefa === "") {
    mensagem.style.color = "red";

    mensagem.textContent = "Valor vazio, tente novamente";
  } else {
    mensagem.style.color = "green";

    mensagem.textContent = "Tarefa adicionada com sucesso!";

    tarefas.push(tarefa);

    renderizarTarefas()
  }
  inputTarefa.value = "";
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = ""



  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");

    novaTarefa.textContent = tarefas[i];

    let botaoRemover = document.createElement("button")
    botaoRemover.className= 'remover';
    botaoRemover.textContent= 'remover';
    botaoRemover.onclick = () => removerTarefa(i)

    let botaoEditar = document.createElement('button');
    botaoEditar.className= 'editar';
    botaoEditar.textContent= 'Editar';
    botaoEditar.onclick = () => editarTarefa(i)

    novaTarefa.appendChild(botaoRemover)
    novaTarefa.appendChild(botaoEditar)

    listaTarefas.appendChild(novaTarefa);
  }
}

function removerTarefa (i){
  tarefas.splice(i, 1);
  renderizarTarefas()
}

function editarTarefa(i){
  let tarefaEdiatda = prompt('Edite a tarefa:');
  if (tarefaEdiatda.trim() !== ""){
    tarefas[i] = tarefaEdiatda
    renderizarTarefas()
  }
}
