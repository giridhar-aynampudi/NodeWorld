var url = "http://mylogger.io/log";
const emitter = new EventEmitter();

emitter.on("messageLogged", function (args) {
  console.log("listener called", args);
});
var log = function (message) {
  console.log(message);
};

module.exports.log = log;
// module.exports.endPoint = url;
