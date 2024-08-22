import http from 'http'
import url from 'url'

const PORT = 8000

let response = ""
http.createServer((req, res) => {
    const requestURL = req.url

    res.writeHead(200, { 'Content-Type': 'text/html' });
    const { name } = url.parse(requestURL ?? "", true).query;


    switch (name) {
        case 'cellular': response = "<img src='https://generative-placeholders.glitch.me/image?width=600&height=300&style=cellular-automata&cells=100'/>"; break;
        case 'joy-division': response = "<img src='https://generative-placeholders.glitch.me/image?width=600&height=300&style=joy-division' />"; break;
        default: response = "<img src='https://generative-placeholders.glitch.me/image?width=600&height=300' />"; break;
    }

    res.end(
        `
        <!DOCTYPE html >
    <html lang="en" >
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content = "width=device-width, initial-scale=1.0" />
            <title>Imagem generator node </title>
        </head>
        <body> 
            ${response}
        </body>
    </html>
        `.trim()
    )

}).listen(PORT);

console.log(`escutando na porta ${PORT}`)