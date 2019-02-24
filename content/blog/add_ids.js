const uuid = require('uuid');
var fs = require('fs');

var walk = require('walk');
var files = [];

// Walker options
var walker = walk.walk('.', {followLinks: false});

walker.on('file', function (root, stat, next) {
  // Add this file to the list of files
  files.push(`${root}/${stat.name}`);
  next();
});

walker.on('end', function () {
  files.forEach((file) => {
    var contents = fs.readFileSync(file, 'utf8');
    contents = contents.replace('---
id:03ba8820-a7cf-4707-a56a-3aef68a49fa2', `---\nid:${uuid()}`);
    fs.writeFileSync(file, contents);
  });
});
