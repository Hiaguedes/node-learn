import { spawn, exec } from 'child_process'

// const pwd = spawn('echo', ['%cd%'], { shell: true });
const pwd = exec('cd')

pwd.stdout?.on('data', data => {
    console.log('stdout: ', data.toString())
})

pwd.stderr?.on('data', data => {
    console.log('stderr: ', data)
})

pwd.on('close', code => {
    console.log('child process exited with code ', code)
})

