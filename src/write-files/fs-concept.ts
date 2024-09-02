/**
 * O file system e um conjunto de wrappers que trabalham com funcoes POSIX, isso significa que 
 * o modulo consegue acessar sistemas de arquivos obedecendo aos padroes da norma POSIX (que por si so
 * e multiplataforma, o acessos funciona sem nenhuma adaptacao em todos os sistemas operacionais, inclusive em 
 * ambientes android e microcontroladores)
 * 
 * cada uma das funcoes do modulo files system vem em duas versoes: sincrona e assincrona, sendo 
 * esta ultima condizente com a natureza assincrona do node
 * 
 * a funcao assincrona recebe um callback de tratamento de erros como ultimo argumento, enquanto 
 * funcoes sincronas imediatamente geram um erro quando uma falha ocorre, podendo usar o try...catch
 */

import fs, { write } from 'fs'
import chokidar from 'chokidar'
import path from 'path'

// obtendo permissoes

import { Mode } from 'stat-mode'

fs.stat('./stderr.log', (err, stats) => {
    if (err) console.log(err)

    const mode = new Mode(stats);

    console.log('stats: ', stats)
    console.log('mode: ', mode)

    console.log('group execute: ', mode.group.execute)
    console.log('others write: ', mode.others.write)
    console.log('owner read: ', mode.owner.read)
})

// const watcher = chokidar.watch('.', {
//     ignored: /[\/\\]./,
//     persistent: true,
// })

// const log = console.log.bind(console);

// watcher
//     .on('add', path => {
//         log(`file ${path} has been added`)
//     })
//     .on('unlink', path => {
//         log(`file ${path} has been removed`)

//     })
//     .on('change', (path, stats) => {
//         log(`file ${path} has been changed to ${stats?.size}`)

//     })
//     .on('ready', () => {
//         log(`ready for changes`)

//     })
//     .on('addDir', path => {
//         log(`directory ${path} has been added`)
//     })
//     .on('unlinkDir', path => {
//         log(`directory ${path} has been removed`)

//     })

// o fs tem dois modulos que observam se um arquivo foi alterado ou nao
// o fs.watch e o fs.FSWatcher, porem eles tem inconcistencias entre as plataformas e nao e tao util assim

// leitura e escrita de arquivos

// sync, readFile e writeFile
// essas funcoes abrem o arquivo, executam as operacoes de leitura, escrita e fecham o arquivo, se existir algo ele e truncado

fs.writeFile('./src/files/add-text.txt', 'write something', (err) => {
    if (err) console.error(err);

    fs.readFile('./src/files/add-text.txt', 'utf-8', (err, data) => {
        if (err) console.error(err);
        console.log(data)
    })
})

// criando um file descriptor, fd

// a+ = append
fs.open('./src/files/add-text.txt', 'a+', 0o666, (err, fd) => {
    if (err) return console.error(err);

    fs.write(fd, 'other something', 0, 'utf-8', (err, writen, str) => {
        const buf = Buffer.from(str);

        fs.read(fd, buf, 0, writen, 0, (err, bytes, buffer) => {
            if (err) return console.error(err);

            console.log(buf.toString('utf-8'))
        })
    })
})

fs.readdir('./src/files', (err, files) => {
    for (let file of files) {
        console.log(file);

        if (path.extname(file) === '.tsx') { // remove todo arquivo com extensao tsx da pasta
            fs.unlink(`./src/files/${file}`, (err) => {
                if (err) console.error('error unlink', err)
            })

        }
    }
})


