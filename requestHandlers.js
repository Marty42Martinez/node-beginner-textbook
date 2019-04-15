function start() {
  console.log('Request handler START was called.');
  return 'Hello Start';
}

function upload() {
  console.log('Request handler for UPLOAD was called');
  return 'Hello Upload';
}

module.exports = {
  start,
  upload
}