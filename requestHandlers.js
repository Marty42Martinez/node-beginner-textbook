const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require('fs');

function start(response, postData) {
  console.log('Request handler START was called.');
  const body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" method="post">'+
  '<textarea name="text" rows="20" cols="60"></textarea>'+
  '<input type="submit" value="Submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';
  
  response.writeHead(200, {'Content-Type': 'text/html' });
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log('Request handler for UPLOAD was called');
  response.writeHead(200, {'Content-Type': 'text/html' });
  response.write('Hello Upload');
  response.write('You have sent: ' + querystring.parse(postData).text);
  response.end();
}

function show(response) {
  console.log('Request handler SHOW was called.');
  response.writeHead(200, { 'Content-Type': 'image/png' });
  fs.createReadStream('./tmp/test.png').pipe(response);
}

module.exports = {
  start,
  upload,
  show
}