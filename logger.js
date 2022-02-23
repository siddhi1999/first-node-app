
const EventEmitter= require('events');
const emitter = new EventEmitter();
emitter.on('messageLogged', (arg) => {
    console.log(arg);
});
module.exports= emitter;

// console.log(__filename);
// console.log(__dirname);
// var url= 'http://mylogger.io.log';

// function log(message) {
//     //Send the http request
//     console.log(message);
// }

// module.exports= log;  //we are just exporting this function
