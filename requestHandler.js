// changes syntax and runtime behavior
// Strict mode treats mistakes as errors so that they're discovered and promptly fixed.
//  makes it impossible to accidentally create global variables
'use strict';

var fs = require('fs');

// a ReadStream object is created
// this object is called an Event Emitter
var stream = fs.createReadStream('/file/path');

var content = '';

var callback = function(data) {
  console.log('I have received a chunk of data: ' + data);
}

// how to use stream.on with a named function
stream.on('data', callback);

// callback for error event
stream.on('error', function(err) {
  console.log('Sad panda: ' + err);
});

// this event only occurs the first time the data is sent
stream.once('data', function(data) {
  console.log('I have received the first chunk of data');
});

// a callback is attached to data events
stream.on('data', function(data) {
  console.log('Received data: ' + data);
});

//  manually remove the function callback on data events
stream.removeListener('data', callback);

//  a callback is attached to the end event
stream.on('end', function() {
  console.log('End of file has been reached');
  // this is the thing to be done after all the file data is loaded
  console.log('File content has been retrieved: ' + content);
});

// this will remove all event listeners for data events
stream.removeAllListeners('data');
