import dgram from 'dgram'

const PORT = 8124;
const client = dgram.createSocket('udp4');

process.stdin.on('data', data => {
    console.log(data.toString('utf-8'));

    client.send(data, PORT, 'localhost', (err, bytes) => {
        if (err) console.error(err)
        else console.log('successfull')
    })
})