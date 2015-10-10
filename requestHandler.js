'use strict';

var fs = require('fs');

// a ReadStream object is created
// this object is called an Event Emitter
var stream = fs.createReadStream('/file/path');

var content = '';

// callback for error event
stream.on('error', function(err) {
  console.log('Sad panda: ' + err);
});

// a callback is attached to data events
stream.on('data', function(data) {
  console.log('Received data: ' + data);
});

//  a callback is attached to the end event
stream.on('end', function() {
  console.log('End of file has been reached');
  // this is the thing to be done after all the file data is loaded
  console.log('File content has been retrieved: ' + content);
});
