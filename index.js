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
logger.emit('login', 'name1');
logger.emit('login', 'name2');


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


// homework
console.log("----- HI, THERE IS MY HOMEWORK -----")

const minimist = require('minimist')(process.argv.slice(2));

users.push(minimist.addUser);
msgs.push(minimist.message);

console.log(`Messages: ${msgs}`);
console.log(`Users: ${users}`);
