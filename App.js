const EventEmitter = require('events');
const emitter= new EventEmitter();

//Register a Listener. we can also use addListener intead of on
emitter.on('messageLogged', function () {
    console.log('Listener called');
});

//Raise an event
emitter.emit('messageLogged');