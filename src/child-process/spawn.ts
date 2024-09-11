import childProcess from 'child_process'

// spawn roda o comando a nivel de sistema operacional
// existe o spawnSync q e a versao sincrona do spawn

const pwd = childProcess.spawn('pwd');

pwd.stdout.on('data', data => {
    console.log('saida: ', data.toString())
})

pwd.stderr.on('data', data => {
    console.error('error: ', data)
})

pwd.on('close', code => {
    console.log(`child process exited with code ${code}`)
})

