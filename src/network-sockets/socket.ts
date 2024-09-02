import net from 'net'

const client = new net.Socket();
client.setEncoding('utf8');

const optionsSocket: net.SocketConnectOpts = {
    port: 8124,
    host: 'localhost',

}

client.connect(optionsSocket, () => {
    console.log('connected to server')
})

process.stdin.on('data', data => {
    client.write(data)
})

client.on('data', data => {
    console.log(data)
})

client.on('close', () => {
    console.log('connection closed')
})

