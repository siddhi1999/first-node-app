const fs= require("fs");

fs.readFile('sample.txt', "utf-8", (err, data) => {    //write utf-8 in options argument to read the file as a text
    if(err) {
        return err;  //or write return 
    }
    console.log(data);
});

console.log("This line will be first");


// const a= {
//     average : (a,b) => { console.log((a+b)/2) },     //this is function
//     precent : (a,b) => {  console.log((a/b)*100) }
// };

// module.exports = a;