
// Make sure we got a filename on the command line.

  // Read the file and print its contents.
  let fs = require('fs');
  let filename = process.argv[2];

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      throw err;
    } 
    console.log(data);
    console.log(data.split('\r\n'))
  });

  


  