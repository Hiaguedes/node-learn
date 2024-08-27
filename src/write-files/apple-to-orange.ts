import fs from 'fs'

try {
    const data = fs.readFileSync('./src/files/apples.txt', 'utf-8')
    console.log(data.toString());

    const alteredData = data.toString().replace(/^apple$/gim, 'orange');
    console.log('\n' + alteredData)

    fs.writeFileSync('./src/files/oranges.txt', alteredData, { flag: 'w' })
} catch (e) {
    console.error(e)
}