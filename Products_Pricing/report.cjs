
// Make sure we got a filename on the command line.

// Read the file and print its contents.
const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.split('\n'));
});
