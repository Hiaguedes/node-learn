import http from 'http'
import fs from 'fs'
import zlib from 'zlib'

const gzip = zlib.createGzip();

const options: http.RequestOptions = {
    hostname: 'localhost',
    port: 8124,
    method: 'POST',
    headers: {
        'Contet-Type': 'application/javascript',
        'content-encoding': 'gzip, deflate'
    }
}

const req = http.request(options, (res) => {
    res.setEncoding('utf-8');
    let data = '';

    res.on('data', (chunk) => {
        data += chunk
    })

    res.on('end', () => {
        console.log(data)
    })
})

req.on('error', e => {
    console.error('request problem: ', e.message)
})

const readable = fs.createReadStream('./src/files/image-example.png')

readable.pipe(gzip).pipe(req)