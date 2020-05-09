const http = require('http');
const fs = require('fs');

server = http.createServer((req, resp)=>{

    if (req.url == "/") {
        const readStream = fs.createReadStream("./index.json");
        resp.writeHead(200, {'Content-type': 'text/json'});
        readStream.pipe(resp);
        resp.end();
    } else {
        resp.write('Some other page');
    }

});

server.listen('3000')