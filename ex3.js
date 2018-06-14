var http = require('http');

http.createServer(function (req, res) {
    console.log(req);
    console.log(res);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Mahi Re</h1>');
}).listen(8080);