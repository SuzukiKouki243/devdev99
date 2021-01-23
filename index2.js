const fs = require('fs');
const http = require('http');
 
var server = http.createServer();
server.on('request', doRequest);
server.listen(80);
console.log('Server running!');
 
// リクエストの処理
function doRequest(req, res) {

  fs.readFile('./lifftest.html', 'UTF-8',
  (error, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

}

