import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="card">
    <p class="eyebrow">Projeto Integrador Extensionista II</p>
    <h1>Minha ONG</h1>
    <p>Verificação da conexão com a API.</p>
    <p id="status" role="status" aria-live="polite">Verificando a API...</p>
    <p id="data-hora"></p>
    <button id="verificar-novamente" type="button">Verificar novamente</button>
  </main>
`;

async function verificarAPI() {
  const status = document.querySelector('#status');
  const dataHora = document.querySelector('#data-hora');
  const botao = document.querySelector('#verificar-novamente');

  botao.disabled = true;
  status.textContent = 'Verificando a API...';
  status.classList.remove('ok');
  dataHora.textContent = '';

  try {
    const resposta = await fetch('/api/health');

    if (!resposta.ok) {
      throw new Error('A API retornou um erro.');
    }

    const dados = await resposta.json();

    status.textContent = `Status da API: ${dados.status}`;
    status.classList.toggle('ok', dados.status === 'ok');
    dataHora.textContent = `Data e hora: ${dados.dataHora}`;
  } catch (erro) {
    status.textContent = 'Status da API: erro';
    dataHora.textContent =
      'Não foi possível conectar à API. Confira se o servidor está ligado.';
    console.error(erro);
  } finally {
    botao.disabled = false;
  }
}

document
  .querySelector('#verificar-novamente')
  .addEventListener('click', verificarAPI);

verificarAPI();
