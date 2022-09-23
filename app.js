var http = require('http');
http.createServer(function (requisicao, resposta) {
    // resposta.writeHead(200, {'Content-Type': 'text/plain'});
    resposta.end('Hello World');
}).listen(8080);