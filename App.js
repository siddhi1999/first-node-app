const fs= require('fs');

//synchronous files reading
// const files= fs.readdirSync('./');
// console.log(files);

//asynchronous file reading
fs.readdir('./', function(err, files) {
    if(err) console.log('error: ', err);
    else console.log('Result: ', files);
});

