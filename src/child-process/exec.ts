// exec inicia um shell, o execFile nao e ambos sao usados pra executar um comando

import childProcess from 'child_process'

const execFile = childProcess.execFile;

const child = execFile('./src/files/log-global.ts', (err, stdout, stderr) => {
    if (err) return console.error('erro na execucao', err)

    console.log('stdout: ', stdout)
})

child.stdin?.write('process finished')
child.stdin?.end()