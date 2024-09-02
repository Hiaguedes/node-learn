import net from 'net'

const PORT = 8124;

const server = net.createServer(connection => {
    console.log('connected');

    connection.on('data', data => {
        console.log(`${data} from ${connection.remoteAddress} ${connection.remotePort}`);

        connection.write(`repeating ${data}`)
    })

    connection.on('close', () => {
        console.log('client closed connection')
    })
}).listen(PORT);

server.on('listening', () => {
    console.log(`escutando na porta ${PORT}`)
})

server.on('error', err => {
    if (err.code === 'EADDRINUSE') {
        setTimeout(() => {
            server.close();
            server.listen(PORT)
        }, 1000)
    } else {
        console.error(err)
    }
})