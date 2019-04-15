const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

function start(response) {
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

function upload(response, request) {
  console.log('Request handler for UPLOAD was called');

  const form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse(request, (error, fields, files) => {
    console.log('parsing done');
    fs.rename(files.upload.path, './tmp/test.png', err => {
      if(err) {
        fs.unlink('./tmp/test.png');
        fs.rename(files.upload.path, './tmp/test.png');
      }
    });
    response.writeHead(200, {'Content-Type': 'text/html' });
    response.write('received image: <br/>');
    response.write('<img src="/show" />');
    response.end();

  })
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