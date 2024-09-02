import zlib from "zlib";
import { program } from 'commander'
import fs from 'fs'

program
    .version('0.0.1')
    .option('-s, --source [file name]', 'Source File Name')
    .option('-f, --file [file name]', 'Destination File Name')
    .option('-t, --type <mode>', 'gzip or deflate')
    .parse(process.argv)

let compress;

const options = program.opts()

if (options.type === 'deflate') {
    compress = zlib.createDeflate()
} else {
    compress = zlib.createGzip()
}

const inp = fs.createReadStream(options.source)
const out = fs.createWriteStream(options.file)

inp.pipe(compress).pipe(out)

// pra rodar basta escrever algo como

// npx tsx src/write-files/compress-decompress.ts -s src/html-example.html -f src/files/html-example-deflate -t deflate
