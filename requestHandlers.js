const exec = require('child_process').exec;

function start() {
  console.log('Request handler START was called.');
  let content = 'empty';
  exec('ls -lah', function(error, stdout, stderr) {
    content = stdout;
  })
  return content;
}

function upload() {
  console.log('Request handler for UPLOAD was called');
  return 'Hello Upload';
}

module.exports = {
  start,
  upload
}