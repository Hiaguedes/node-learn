/**
 * stream e uma interface a ser implementada e e implementada nos modulos de escrita de arquivo por exemplo
 * o que implementar
 * 
 * - alterar a codificacao do fluxo com setEnconding
 * - verificar se o fluxo e de leitura, escrita ou ambos (fluxo duplex)
 * - podemos capturar eventos de fluxo, como data received (dados recebidos) ou connection closed,
 * associando funcoes de callback a cada evento
 * - podemos pausar e retomar o fluxo
 * - podemos redirecionar dados de um fluxo de leitura para um fluxo de escrita, num comportamento
 * semelhante ao pipe (|) do unix
 * 
 * Um fluxo de escrita é o destino para o qual os dados são enviados (“escritos”). 
 * Dentre os eventos que podemos detectar estão error e finish, quando o método end() 
 * é chamado e todos os dados foram enviados. Outro evento possível é drain, quando uma 
 * tentativa de escrita de dados devolve o valor false.
 * 
 * Um exemplo de fluxo de escrita e quando criamos um cliente HTTP
 * 
 * todo metodo de leitura implementa um pipe pra um fluxo de escrita, 
 * 
 */

import zlib from 'zlib'
import fs from 'fs'

const gzip = zlib.createGzip();
const input = fs.createReadStream('./src/files/input-zlib.txt')
const out = fs.createWriteStream('./src/files/input-zlib.txt.gz');

input.pipe(gzip).pipe(out) // exemplo das pipes, a leitura do arquivo e passada pra compactacao, isso e um fluxo de transformacao
