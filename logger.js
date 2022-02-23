var url= 'http://mylogger.io.log';

function log(message) {
    //Send the http request
    console.log(message);
}

module.exports.log= log;  //we are just exporting this function
