const { adicionarTarefa, renderizarTarefas, removerTarefa, editarTarefa, tarefas } = require('./script.js');

beforeEach(() => {
    document.body.innerHTML = `
        <input id="inputTarefa" />
        <p id="mensagem"></p>
        <ul id="listaTarefas"></ul>
    `;
    tarefas.length = 0;
});


test('deve adicionar uma nova tarefa à lista', () => {
    document.getElementById('inputTarefa').value = 'Comprar leite';
    adicionarTarefa();
    expect(tarefas).toContain('Comprar leite');
});


test('deve mostrar mensagem de erro se a tarefa for vazia', () => {
    document.getElementById('inputTarefa').value = '';
    adicionarTarefa();
    const mensagem = document.getElementById('mensagem').textContent;
    expect(mensagem).toBe('Valor vazio, tente novamente');
});


test('deve remover a tarefa correta da lista', () => {
    tarefas.push('Tarefa A', 'Tarefa B');
    removerTarefa(0); // Remove o primeiro item (Tarefa A)
    expect(tarefas).not.toContain('Tarefa A');
    expect(tarefas).toContain('Tarefa B');
    expect(tarefas.length).toBe(1);
});


test('deve editar uma tarefa existente', () => {
    tarefas.push('Tarefa Antiga');
    
    window.prompt = jest.fn(() => 'Tarefa Nova');
    
    editarTarefa(0);
    expect(tarefas[0]).toBe('Tarefa Nova');
});


test('deve limpar o input após adicionar uma tarefa', () => {
    document.getElementById('inputTarefa').value = 'Fazer exercício';
    adicionarTarefa();
    expect(document.getElementById('inputTarefa').value).toBe('');
});