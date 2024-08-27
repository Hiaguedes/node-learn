// REPL -> Read Eval Print Lopp -> laco de leitura calculo e exibicao
// REPL e o terminal do node

// _ e o valor da ultima variavel declarada

import repl from 'repl'

repl.start({
    prompt: ':: ',
    ignoreUndefined: true,
    replMode: repl.REPL_MODE_STRICT,
})