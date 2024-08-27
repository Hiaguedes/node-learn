import console from 'console'

let cons = new console.Console(process.stdout, process.stderr);

// no fundo o console e uma aplicacao com mais semantica do process.stdout e stderr
cons.log('testando interface')
cons.error('testando erro')