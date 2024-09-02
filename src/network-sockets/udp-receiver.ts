import dgram from 'dgram'
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.log(`message ${msg} from ${rinfo.address}: ${rinfo.port}`);
})

server.bind(8124)