const log = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");

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

const file = fs.readdirSync("./");
console.log(file);

fs.readdir("$", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("result", files);
});
