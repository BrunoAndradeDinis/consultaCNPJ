# Consulta CNPJ

A extensão **Consulta CNPJ** permite que você consulte informações detalhadas sobre um CNPJ diretamente do seu navegador. Ela exibe dados como endereço, inscrição estadual, situação, nome fantasia e nome da empresa a partir de uma API pública, fornecida pela CNPJA TECNOLOGIA LTDA.

## Funcionalidades

- Consulta de informações de CNPJ.
- Exibição de detalhes como endereço, inscrição estadual, situação, nome fantasia e nome da empresa.
- Validação do formato do CNPJ.
- Exibição de mensagens de sucesso ou erro.

## Tecnologias Utilizadas

- **HTML**: Estruturação do layout da extensão.
- **CSS**: Estilo visual da extensão (incluso no arquivo `style.css`).
- **JavaScript**: Lógica de funcionamento e manipulação de dados da API.
- **BootStrap**: Estilo visual da extensão (incluso no arquivo `injectBootStrap.js`)

## Estrutura dos Arquivos

- `index.html`: Página principal da extensão.
- `popup.js`: Script que faz a consulta à API e manipula o DOM.
- `injectBootStrap.js`: Script para injetar o Bootstrap
- `style.css`: Arquivo de estilos CSS.

## Como Usar

1. **Instalação**

   1. Clone este repositório ou baixe os arquivos da extensão.
   2. Abra o navegador e vá para a página de extensões (por exemplo, `chrome://extensions/` no Google Chrome). Caso você use o Opera ele também está rodando por lá o/.
   3. Ative o modo de desenvolvedor.
   4. Clique em "Carregar sem compactação" e selecione a pasta onde os arquivos da extensão estão localizados.

2. **Uso**

   1. Abra a extensão clicando no ícone correspondente na barra de ferramentas do navegador.
   2. Insira um CNPJ no formato `00.000.000/0000-00` ou `00000000000000` no campo de entrada.
   3. Clique no botão "Enviar" para consultar as informações.
   4. As informações serão exibidas abaixo do botão se o CNPJ for válido.

## Como Funciona

1. O script `popup.js` lida com o envio do formulário, valida o formato do CNPJ e faz uma solicitação para a API pública `https://open.cnpja.com/office/{cnpj}`.
2. Se a resposta for bem-sucedida, os dados são exibidos nos campos apropriados.
    - Endereço, Incrição estadual, Situação, Nome Fantasia e Nome da empresa.
3. Se ocorrer um erro, uma mensagem é exibida para o usuário.


## Contribuição

Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Envie a branch para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.

## Problemas Conhecidos

- A extensão pode não funcionar corretamente se a API pública estiver fora do ar.
- A validação do CNPJ é baseada no número de caracteres e não realiza uma validação completa do dígito verificador, dei uma breve vasculhada sobre validações de CNPJ e infelizmente as que testei não chegaram a funcionar muito bem (aceito dicas o/).

## Agradecimentos

- Agradecimentos ao [Open CNPJ](https://cnpja.com//) pela API pública que fornece os dados do CNPJ.
