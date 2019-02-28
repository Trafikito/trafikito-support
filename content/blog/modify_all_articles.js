// // this file is helper file which is used to run through all the files and edit something there. E.g. add uuid for each
// // it is modified for a task, ran once and commented out.
//
// const uuid = require('uuid');
// var fs = require('fs');
//
// var walk = require('walk');
// var files = [];
//
// // Walker options
// var walker = walk.walk('.', {followLinks: false});
//
// walker.on('file', function (root, stat, next) {
//   // Add this file to the list of files
//   files.push(`${root}/${stat.name}`);
//   next();
// });
//
// walker.on('end', function () {
//   files.forEach((file) => {
//     var contents = fs.readFileSync(file, 'utf8');
//     // DO THE MAGIC
//     // DO THE MAGIC
//     // DO THE MAGIC
//
//     contents = contents.split('---');
//     contents = contents.join('---');
//     console.log(`#contents `, contents);
//
//     // MAGIC IS OVER
//     // MAGIC IS OVER
//     // MAGIC IS OVER
//     fs.writeFileSync(file, contents);
//   });
// });
