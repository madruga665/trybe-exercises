const express = require('express');

// 1 Criar uma nova aplicação Express;
const app = express();

// 2 Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;
app.get('/', handleHelloWorldRequest);

// 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// 4 Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".
function handleHelloWorldRequest(_req, res) {
  res.status(200).send('Hello World!');
}
