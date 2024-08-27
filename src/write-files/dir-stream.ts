import fs from 'fs'

const writeStream = fs.createWriteStream('./src/files/log.txt', {
    flags: 'a',
    encoding: 'utf-8',
    mode: 0o666
})

writeStream.on('open', () => {
    fs.readdir('./src', (errDir, files) => {
        if (errDir) console.error(errDir)

        files.forEach(name => {
            fs.readFile('./src/' + name, 'utf-8', (errFile, data) => {
                if (errFile) console.error(errFile)
                const hasReadFile = /readFile/g.test(data);

                if (hasReadFile) {
                    writeStream.write('read File in ' + name + '\n\n', 'utf-8', (err) => {
                        console.error(err?.message)
                    });
                }
            })
        })
    })
})

writeStream.on('error', (err) => {
    console.error(err)
})