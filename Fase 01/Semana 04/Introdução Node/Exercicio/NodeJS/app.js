// Incluindo uma bibloteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Definição de endereço / URL
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

  // Pegar a pergunta na url
  const params = queryString.parse(url.parse(req.url, true).search);
  
  // Verificar a perguntar e escolher uma resposta
  let resposta;
  if (params.pergunta == 'melhor-filme'){
    resposta = "Vingadores Ultimato";
  } else {
    resposta = 'não sei, desculpe :(';
  }

  // Retornar a resposta escolhia

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});