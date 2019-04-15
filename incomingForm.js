const formidable = require('formidable');
const http = require('http');
const sys = require('sys');

http.createServer((req, res) => {
  if(req.url == '/upload' && req.method.toLocaleLowerCase() == 'post') {
    const form = new formidable.IncomingForm();
    form.parse(req, (error, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload: /n/n');
      res.end(sys.inspec({ fields: fields, files: files }));
    });
    return;
  }

  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
  '</form>'
  );


}).listen(8888);