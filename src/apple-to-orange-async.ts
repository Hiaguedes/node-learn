import fs from 'fs'

fs.readFile('./src/files/apples.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        const alteredData = data.toString().replace(/^apple$/gim, 'orange');

        console.log(alteredData)
        fs.writeFile('./src/files/oranges-async.txt', alteredData, (err) => {
            console.error(err)

        })

    }
})