// homework

const argv = require('minimist')(process.argv.slice(2));
const events = require('events');

const getMessages = new events();
const getUsers = new events();

const messages = [];
const users = [];

getMessages.on("addMessages", addData);
getMessages.emit("addMessages", messages, argv.message);
console.log(messages)

getUsers.on("addUsers", addData);
getUsers.emit("addUsers", users, argv.addUser);
console.log(users);

function addData(arr, property) {
    property
        ? arr.push(property)
        : arr.push('There is no any data')

    // if (property) {
    //     arr.push(property)
    // } else {
    //     arr.push('There is no any data')
    // }
}