import { inspect } from "util"

const obj = {
    a: {
        b: {
            c: {
                d: 'test'
            }
        }
    }
}

console.log(obj) // { a: { b: { c: [Object] } } }
console.log(JSON.stringify(obj, null, 2))

const msg = inspect(obj, { showHidden: true, depth: 4, colors: true })

console.log(msg)