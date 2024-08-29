import http, { RequestOptions } from 'http'
import querystring from 'querystring'

// vai fazer comunicacao com o post-sender, entao rode ele primeiro

const data = querystring.stringify({
    msg: 'hello from post sender'
})

const options: RequestOptions = {
    hostname: 'localhost',
    port: 8000,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, (res) => {
    console.log('status:', res.statusCode);
    console.log('headers: ', JSON.stringify(res.headers))
    res.setEncoding('utf-8');

    res.on('data', (chunk) => {
        console.log('body: ', chunk)
    })

    res.on('end', () => {
        console.log('no more data in response')
    })

})

req.on('error', (e) => {
    console.error(`has some problem with request: ${e.message}`)
})

req.write(data)
req.end()