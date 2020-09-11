const log = require("./logger");
const path = require("path");
const os = require("os");
function hello(name) {
  console.log("hello " + name);
}

hello("giridhar");

// console.log(window);
log.log("yo");

var pathObj = path.parse(__filename);
console.log(pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
