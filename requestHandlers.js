function start() {
  console.log('Request handler START was called.');
}

function upload() {
  console.log('Request handler for UPLOAD was called');
}

module.exports = {
  start,
  upload
}