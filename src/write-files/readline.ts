import readline from 'readline'

// uma vez incluido esse modulo o programa do Node nao e encerrado are que fechemos a interface

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('>> say your name... ', answer => {
    console.log('so your name is ', answer, '   interesting...');

    rl.setPrompt(">> ");
    rl.prompt();
})

const closeInterface = () => {
    rl.close();
    console.log('exiting program, bye bye')
}

rl.on('line', (cmd) => {
    if (cmd.trim() === '.leave') {
        closeInterface()
        return;
    }

    console.log("repating command: ", cmd);
    rl.prompt();
})

rl.on('close', () => {
    closeInterface()
})