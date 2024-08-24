import events from 'events'

const em = new events.EventEmitter();

em.on('someEvent', () => {
    console.log('something event emitted')
})

const args = process.argv
console.log(args);

if (args.includes("something")) {
    em.emit('someEvent')
}