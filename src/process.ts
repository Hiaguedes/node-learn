process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
    let input

    while ((input = process.stdin.read()) !== null) {
        process.stdout.write(input)

        const command = input.trim();

        if (command === 'exit') {
            process.exit(0)
        } else {
            console.log('nao e exit')
        }
    }


})