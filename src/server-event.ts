import http from 'http';

const PORT = 3000;
const server = http.createServer();

server.on('request', (req, res) => {
    console.log('servidor requisitado')
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello World\n');
})

server.on('connection', () => {
    console.log('connection event')
})

server.listen(PORT, () => {
    console.log('listening event')
})

console.log('conectado na porta: ', PORT)