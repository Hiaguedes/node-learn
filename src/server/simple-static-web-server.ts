/*
1 - Criar um servidor HTTP que fique de prontidao para receber solicitacos dos clientes
2 - Quando uma solicitacao chegar o URL deve ser analisado para determinar a localizacao do arquivo
3 - Verificar se o arquivo solicitado existe mesmo
4 - Se o arquivo nao existir responder de acordo
5 - Se o arquivo realmente existir abri-lo para leitura
6 - Preparar um cabecalho de resposta
7 - Transferir o conteudo do arquivo para o corpo de resposta
8 - Esperar por uma nova solicitacao
*/

import http from 'http'
import fs from 'fs'

const baseFile = "./src/files/"
const PORT = 6000;

const server = http.createServer().listen(PORT);


server.on('request', (req, res) => {
    const pathname = baseFile + (req.url === "/" ? '/index.html' : req.url);
    const file = fs.createReadStream(pathname)

    fs.stat(pathname, (err, stats) => { // verifica a existencia de um arquivo no caminho solicitado
        if (err) {
            console.error(err);
            res.writeHead(404);
            res.write("resource missing 404");
            res.end()
        } else {
            res.setHeader('Content-Type', 'text/html')
            file.on('open', () => {
                res.statusCode = 200;
                file.pipe(res)
            })

            file.on("error", (err) => {
                res.writeHead(403);
                res.write("file missing or permission")
                console.error(err)
                res.end()
            })

        }
    })

})

console.log(`escutando na porta ${PORT}`)