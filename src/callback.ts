const fib = (n: number): number => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

let Obj = function () {
    return {
        doSomething: function (arg: number, cb: (err: any, value: number) => void) {

            process.nextTick(() => { // bloqueia CPU
                let data = fib(arg);
                cb(null, data)
            })
        }
    }
}


const test = Obj();

test.doSomething(100, (err, value) => {
    if (err) console.error(err)

    console.log(`fibonaci value for 10: ${value}`)
})

/*
A razão para isso é que process.nextTick() garante que o laço de eventos seja esvaziado
antes que a função seja chamada. Isso significa que todas as funcionalidades síncronas 
são processadas antes que a funcionalidade blocante (se existir) seja chamada. 
No exemplo, o bloqueio não ocorre por algum I/O, mas porque a operação requer muito tempo de CPU.

*/