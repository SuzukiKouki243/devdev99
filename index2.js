var http = require('http');
 
var server = http.createServer();
server.on('request', doRequest);
server.listen(80);
console.log('Server running!');
 
// リクエストの処理
function doRequest(req, res) {

  res.write('<!DOCTYPE HTML>');
  res.write('<html>');
  res.write('<head>');
  res.write('<meta charset="utf-8">');
  res.write('<title>こんにちは、のおど・じぇいえす。</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<section>');
  res.write('<h1>こんにちは、のおど・じぇいえす。</h1>');
  res.write('<p>Node.jsでHTMLタグを作れるのかテストですと。</p>');
  res.write('</section>');
  res.write('</body>');
  res.write('</html>');

}

