'use strict';

var fs = require('fs');

// a ReadStream object is created
var stream = fs.createReadStream('/file/path');

// a callback is attached to data events
stream.on('data', function(data) {
  console.log('Received data: ' + data);
});

//  a callback is attached to the end event
stream.on('end', function() {
  console.log('End of file has been reached');
});
