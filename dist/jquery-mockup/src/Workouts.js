"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Quote = /** @class */ (function () {
    function Quote() {
    }
    return Quote;
}());
exports.Quote = Quote;
var Exercise = /** @class */ (function () {
    function Exercise() {
    }
    return Exercise;
}());
exports.Exercise = Exercise;
var Player = /** @class */ (function () {
    function Player() {
        this.name = "James Cerniglia";
        this.done = [{ reps: 1, sets: 1, name: "did this" }];
        this.canDo = [{ reps: 1, sets: 1, name: "can do these" }];
        this.score = 0;
    }
    Player.prototype.drawDone = function () {
        $("#my-Done").html(this.done.map(function (x) { return "<li class=\"list-group-item\">" + x.name + "</li>"; }).join(""));
    };
    Player.prototype.drawCanDo = function () {
        $("#my-canDO").html(this.canDo.map(function (x) { return "<li class=\"list-group-item\">" + x.name + "</li>"; }).join(""));
    };
    return Player;
}());
exports.Player = Player;
var Room = /** @class */ (function () {
    function Room() {
        this.players = [new Player(), new Player()];
        this.quotes = [];
    }
    Room.prototype.drawPicture = function () {
        $("#picture").attr("src", this.picture);
    };
    Room.prototype.drawQuotes = function () {
        $("#played-quotes").html(this.quotes.map(function (x) { return "<li class=\"list-group-item\">" + x.text + "</li>"; }).join(""));
    };
    Room.prototype.drawDone = function () {
        $("#my-Done").html(this.drawDone.map(function (x) { return "<li class=\"list-group-item\">" + x.name + "</li>"; }).join(""));
    };
    Room.prototype.drawCanDo = function () {
        $("#my-canDo").html(this.drawCanDo.map(function (x) { return "<li class=\"list-group-item\">" + x.name + "</li>"; }).join(""));
    };
    return Room;
}());
exports.Room = Room;
var Game = /** @class */ (function () {
    function Game() {
        this.players = [];
        this.pictures = [
            ""
        ];
        this.quotes = [
            { text: "Deadlift" },
            { text: "Bench Press" },
        ];
    }
    return Game;
}());
exports.Game = Game;
// Controller
var game = new Game();
var room = new Room();
var me = new Player();
var i = 0;
room.picture = game.pictures[i];
room.drawPicture();
room.drawQuotes();
room.drawDone();
room.drawCanDo();
$("#cmd-flip").click(function (e) {
    e.preventDefault();
    i++;
    room.picture = game.pictures[i];
    room.drawPicture();
});
//# sourceMappingURL=Workouts.js.map