var express = require("express");
var handler = require("./httpHandler");
var gameController = require("./gameController");
var server = express();
server.use("/client", express.static("./jquery-mockup"));
server.use("/old", handler.main);
// server.use("/game", gameController.router );SSS
server.listen(3001);
console.log("http://localhost:3001");
//# sourceMappingURL=index.js.map