import repl from 'repl'
import { personalInfo } from 'hiaguedes/index'

let context = repl.start({
    ignoreUndefined: true,
    replMode: repl.REPL_MODE_STRICT
}).context

context.info = personalInfo // consegue puxar minhas infos pro repl, isso pode ser feito pra mais coisas e mais libs
// e uma aplicacao mais interessante a se ter pro repl

