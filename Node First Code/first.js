// console.log('hii harsh');

const fs = require('fs');
fs.writeFileSync('read.txt', 'This is my first file created by node js');


// require('fs') loads the module and stores it in the variable fs.
// writeFileSync() is a synchronous method of the fs module.