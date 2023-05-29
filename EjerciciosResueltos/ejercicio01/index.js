const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end("Hola mundo");
});
server.listen(3000);
console.log("Escuchando en: http://localhost:3000")
