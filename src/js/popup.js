document.addEventListener('DOMContentLoaded', () => {
  const endereco = document.getElementById('endereco');
  const inscricao = document.getElementById('ie');
  const situacao = document.getElementById('situacao');
  const nomeFantasia = document.getElementById('nomeFantasia');
  const nomeEmpresa = document.getElementById('nomeEmpresa');
  const infoDiv = document.getElementById('infos');

  async function apiCNPJ(pj) {
    const url = `https://open.cnpja.com/office/${pj}`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados para o ID ${pj}: ${response.statusText}`);
        exibirMensagem('CNPJ inválido. Verifique e tente novamente.', 'danger');
      }

      // Aqui temos os dados da API
      const dados = await response.json();

      // Verifica se o endereço existe e acessa os campos
      const address = dados.address || {};
      const rua = address.street || '';
      const numero = address.number || '';
      const bairro = address.district || '';
      const cidade = address.city || '';
      const cep = address.zip || '';
      const estado = address.state || '';
      const inscricaoEstadual = dados.registrations || [];
      const fantasia = dados.alias || 'Não tem nome fantasia';
      const empresa = dados.company.name || '';

      // Colocando condição de validação caso esteja ou não ativo
      const status = inscricaoEstadual.length === 0
        ? dados.status.text
        : inscricaoEstadual.map((item, i) => `${i + 1}º - ${item.enabled ? "Ativo" : "Não Habilitado"}`).join('\n');

      endereco.value = `${rua}, ${numero}, ${bairro}, ${cidade} - ${estado} - CEP: ${cep}`;
      inscricao.value = inscricaoEstadual.length === 0
        ? "Isento"
        : inscricaoEstadual.map((item, i) => `${i + 1}º - ${item.number} | ${item.state}`).join('\n');

      situacao.value = status;
      nomeFantasia.value = fantasia;
      nomeEmpresa.value = empresa;

      if (infoDiv.classList.contains('oculto')) {
        infoDiv.classList.remove('oculto');
      } else{
        return
      }
    } catch (error) {
      console.error('Erro ao buscar ou processar dados:', error);
      exibirMensagem('CNPJ inválido. Verifique e tente novamente.', 'danger');
      infoDiv.classList.add('oculto') 
    }
  }
  // Para exibir mensagem success ou danger(erro)
  function exibirMensagem(mensagem, tipo) {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('alert-success', 'alert-danger');
    messageDiv.className = `alert ${tipo === 'success' ? 'alert-success' : 'alert-danger'}`;
    messageDiv.textContent = mensagem;
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita recarregar a página
    let cnpj = document.getElementById('cnpj').value; // Pega o número do CNPJ
    cnpj = cnpj.replace(/[^\d]/g, ''); // Limpa o CNPJ

    if (cnpj.length == 14) {
      exibirMensagem('CNPJ válido!', 'success');
      apiCNPJ(cnpj);
    } else {
      exibirMensagem('CNPJ inválido. Verifique e tente novamente.', 'danger');
    }
  });

});
