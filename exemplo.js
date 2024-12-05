// Seleciona os elementos do DOM
const formulario = document.getElementById('formulario');
const listaUsuarios = document.getElementById('listaUsuarios');

// Adiciona um evento de envio ao formulário
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita o recarregamento da página

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const lugarOndeMora = document.getElementById('lugarOndeMora').value;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !dataNascimento || !lugarOndeMora) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Cria um novo item na lista de usuários
    const item = document.createElement('li');
    item.textContent = `Nome: ${nome}, Data de Nascimento: ${dataNascimento}, Lugar onde mora: ${lugarOndeMora}`;
    listaUsuarios.appendChild(item);

    // Limpa o formulário após o envio
    formulario.reset();
});
