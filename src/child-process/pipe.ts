import childOProcess from 'child_process'

const spawn = childOProcess.spawn;

// no unix seria isso aqui find . -ls | grep ./src
const find = spawn('find', ['.', '-ls']);
const grep = spawn('grep', ['./src']);

grep.stdout.setEncoding('utf-8');

find.stdout.pipe(grep.stdin)

grep.stdout.on('data', (data) => {
    console.log(data)
})

find.stderr.on('data', data => {
    console.log('grep err: ', data)
})

find.on('close', code => {
    if (code !== 0) {
        console.log('find process exited with code ', code)
    }
})

grep.on('exit', code => {
    if (code !== 0) {
        console.log('grep process exited with code ', code)
    }
})