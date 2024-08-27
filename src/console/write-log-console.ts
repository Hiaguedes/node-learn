import { Console } from "console";
import { createWriteStream } from "fs";

const output = createWriteStream('./stdout.log');
const errorOutput = createWriteStream('./stderr.log')
const logger = new Console(output, errorOutput)

let count = 5;
count++;
logger.log(`count: ${count}`)

// escrevera dois arquivos de log, um com count atualizado e outro de erro vazio