import http from 'http'
import queryString from 'querystring'

const PORT = 8000
const server = http.createServer().listen(PORT);

server.on('request', (req, res) => {
    if (req.method === 'POST') {
        let body = "";

        req.on('data', (data) => {
            body += data;
        })

        req.on('end', () => {
            let post = queryString.parse(body);
            // let post = body;

            console.log(post)

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Hello")
        })
    }
})

console.log(`server listening on ${PORT}`)