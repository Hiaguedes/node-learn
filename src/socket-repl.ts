import net from 'net'
import repl from 'repl'

let connections = 0;

// e algo que funciona melhor no linux
// pra rodar no diretorio rode o comando nc -U /tmp/node-repl-sock

repl.start({
    prompt: ":: stdin> ",
    input: process.stdin,
    output: process.stdout
})

net.createServer((socket) => {
    connections += 1;

    repl.start({
        prompt: ":: unix socket> ",
        input: socket,
        output: socket
    }).on('exit', () => {
        socket.end()
    })
}).listen("/tmp/node-repl-sock")

net.createServer((socket) => {
    connections += 1;

    repl.start({
        prompt: ":: tcp socket> ",
        input: socket,
        output: socket
    }).on('exit', () => {
        socket.end()
    })
}).listen(5001)