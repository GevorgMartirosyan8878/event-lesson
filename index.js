// const events = require('events');

// const logger = new events()

// logger.on('message', (msg) => {
//     console.log(msg)
// })

// logger.emit("message", "hello world");

const events = require('events');

const logger = new events()



const users = [];
const msgs = [];

logger.on('message', (msg) => {
    console.log(`New message: ${msg}`);
    msgs.push(msg)
})

logger.emit("message", "hello world");

logger.on('login', name => {
    console.log(`new user: ${name}`)
    users.push(name)
})

logger.emit('message', 'there is new message');
logger.emit('login', 'gev');
logger.emit('login', 'art');


logger.on('getUsers', () => {
    console.log('logged users:')
    users.forEach(name => {
        console.log(name)
    })

})

logger.on('getMessage', () => {
    console.log('messages');
    msgs.forEach(msg => {
        console.log(msg)
    })
})

logger.emit('getUsers')
logger.emit('getMessage')
