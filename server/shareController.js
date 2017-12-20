const express = require("express");
const share = require("./shareObject");

const router = express.Router();

router
  .get("/share", (req, res) => res.send(share))
  .get("/room", (req, res) => res.send(share.room))
  .post("/room/players", (req, res) => {
    if (req.body.password == "password") {
      let person = share.room.players.find(x => x.fbid == req.body.fbid);
      if (!person) {
        person = {
          name: req.body.name,
          id: share.room.players.length,
          fbid: req.body.fbid,
          picture: req.body.picture
        };
        share.room.players.push(person);
      }
      res.status(201).send(person);
    } else {
      res.status(403).send("Invalid Password");
    }
  });

module.exports.router = router;
