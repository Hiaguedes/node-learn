import vm from 'vm'
import util from 'util'
// require vem do objeto global node require
// console.log(require)

global.count1 = 100;
let count2 = 100

const txt = `
    if(typeof count1 === undefined) { 
        let count1 = 0; 
    };
    count1++; 


    let count2 = 0; 
    count2++;
    console.log(count2, 'dentro da vm');
    

    console.log(count1);
`;

const script = new vm.Script(txt)

script.runInThisContext({ filename: 'count.vm' })
console.log(count1);
console.log(count2);

const sandbox = {
    countContext: 1
}
const newTxt = `
    countContext++;
    const created = true;
    console.log(countContext ?? 'nao foi')
`;

vm.createContext(sandbox);

if (vm.isContext(sandbox)) {
    console.log('contexto criado');

}
vm.runInContext(newTxt, sandbox, { filename: 'context.vm' })
console.log(util.inspect(sandbox))