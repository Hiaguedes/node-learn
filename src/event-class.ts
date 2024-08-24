import fs from 'fs'
import { EventEmitter } from 'stream';

class InputChecker extends EventEmitter {
    name: string;
    writeStream: fs.WriteStream;

    constructor(name: string, file: string) {
        super();
        this.name = name;
        this.writeStream = fs.createWriteStream(`./src/files/${file}.txt`, {
            encoding: 'utf-8',
            mode: 0o666,
            flags: 'a'
        })
    }

    check(input: string) {
        let command: 'wr:' | 'en:' | string = input.trim().substring(0, 3);

        if (command === 'wr:') {
            this.emit('write', input.substring(3, input.length))
        } else if (command === 'end') {
            this.emit('end')
        } else {
            this.emit('echo', input)
        }
    }
}

let ic = new InputChecker('Shelley', 'output')

ic.on('write', (data) => {
    console.log('write event')
    ic.writeStream.write(data, 'utf-8')
})

ic.on('echo', (data) => {
    console.log('echo event')
    process.stdout.write(ic.name + ' wrote ' + data)
})

ic.on('end', () => {
    console.log('end event')
    process.exit(0)
})

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
    let input = process.stdin.read();

    if (input !== null) {
        ic.check(input)
    }
})