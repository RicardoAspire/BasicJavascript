const mod = require('./module'); 
console.log(mod.getName());


const fs = require('fs');
fs.writeFile('./new.txt', "Hello world", function(e){
    if(e){
        console.log("There was an error");
    }
    console.log("Document created successfully");
});


