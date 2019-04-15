function start() {
  console.log('Request handler START was called.');
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
  }
  sleep(10000);
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