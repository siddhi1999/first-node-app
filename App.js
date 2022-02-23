    const emitter= require('./logger');
    emitter.emit('messageLogged', {data: 'message'});
    

// const EventEmitter = require('events');
// const emitter= new EventEmitter();

// //Register a Listener. we can also use addListener intead of on
// emitter.on('messageLogged', function (arg) {
//     console.log('Listener called', arg);
// });

// //Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});