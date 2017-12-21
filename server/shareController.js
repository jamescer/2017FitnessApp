const express = require("express");
const share = require("./shareObject");

const router = express.Router();

router
  .get("/share", (req, res) => res.send(share))
  .get("/room", (req, res) => res.send(share.room))
  .get("/myExercises", (req, res) => res.send(share.myExercises))
  .get("/otherExercises", (req, res) => {
    console.log(req.body.myExercises);
    share.otherExercises = req.body.myExercises;
    res.send(share.otherExercises)
  })
  .post("/otherExercises", (req, res) => {
    res.status(201).send(share.otherExercises);
  })
  .post("/myExercises", (req, res) => {
    //console.log(req.body);
    exer = { name: req.body.exerciseName, reps: req.body.reps, weight: req.body.weight };
    share.myExercises.push(exer);
    res.status(201).send(exer);
  })
  .post("/room/players", (req, res) => {
    if (req.body.password == "password") {
      let person = share.room.players.find(x => x.fbid == req.body.fbid);
      if (!person) {
        person = {
          name: req.body.name,
          id: share.room.players.length,
          myExercises: req.body.myExercises,
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
