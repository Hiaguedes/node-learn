// o fork inicia processos no node, cada novo processo consome uma instancia completa do V8, oq consome memoria e tempo de CPU

// o modulo cluster e baseado no fork

import cp from 'child_process';
import http from 'http'

const cp1 = cp.fork('./src/child-process/process_child1.ts')

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('handled by parent \n');
})

server.on('listening', () => {
    cp1.send('server', server)
})

server.listen(3000)