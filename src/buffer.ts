import { StringDecoder } from "string_decoder"

let bufStr = Buffer.from("new Whatever", 'utf-8')
let bufAloc = Buffer.alloc(24)
// buf.fill(10)
console.log(bufStr)
console.log(bufAloc)

const jsonBuffer = JSON.stringify(bufStr)
console.log(jsonBuffer) // {"type":"Buffer","data":[110,101,119,32,87,104,97,116,101,118,101,114]}

console.log(Buffer.from(JSON.parse(jsonBuffer).data).toString()) // destransformar o buffer

// se o buffer tiver incompleto retorna algo inconmpreensivel
// nesse caso usar o StringDecoder

let decoder = new StringDecoder('utf-8')

console.log(decoder.write(Buffer.from(JSON.parse(jsonBuffer).data)))

const intro = "senha: "
const bufToAlter = Buffer.from(`${intro}1234567889`);
const slice = bufToAlter.slice(intro.length, bufToAlter.length)
console.log("slice pra alterar ", decoder.write(slice))
slice.fill('*')
console.log(decoder.write(bufToAlter)) // senha: **********