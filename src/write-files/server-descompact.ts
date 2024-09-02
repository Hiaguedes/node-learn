import http from 'http'
import zlib from 'zlib'
import fs from 'fs'

const PORT = 8124;

const server = http.createServer().listen(PORT, () => {
    console.log('server escutando na porta', PORT)
})

server.on('request', (req, res) => {
    if (req.method === 'POST') {
        let chunks = [];

        req.on('data', (chunk) => {
            chunks.push(chunk)
        })

        req.on('end', () => {
            let buf = Buffer.concat(chunks);

            zlib.unzip(buf, (err, result) => {
                if (err) {
                    res.writeHead(500);
                    res.end();
                    return console.error('error ', err)
                }

                let timestamp = Date.now();
                fs.createWriteStream(`./src/files/decompressed-${timestamp}.png`).write(result)

                res.writeHead(200, { 'Content-Type': 'text/plain' });

                res.end('Received and undecompressed file \n');
            })
        })
    }
})