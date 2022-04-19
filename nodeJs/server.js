const http = require('http');

const handleServer = function(req, res){
    res.write("Node JS server working");
    res.end();
};

const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log("The server is working");
});

