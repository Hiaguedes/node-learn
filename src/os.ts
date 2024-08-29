import os from 'os' // o modulo os e mais informativo sobre o sistema e garantir modulos independentes do sistema

console.log(`using end of line ${os.EOL} to insert a new line`)

console.log("big endian(BE) ou little endian(LE): ", os.endianness())
console.log('temporary dir: ', os.tmpdir())
console.log('home diretory: ', os.homedir())

console.log(os.totalmem()) // total memory in bytes
console.log(os.freemem()) // free memory in bytes

console.log(os.hostname()) // nome do usuario