'use strict';

var fs = require('fs');

var stream = fs.createReadStream('/file/path');

stream.on('data', function(data) {
  console.log('Received data: ' + data);
});

stream.on('end', function() {
  console.log('End of file has been reached');
});
