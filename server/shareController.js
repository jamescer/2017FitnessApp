const express = require("express");
const share = require("./shareObject");

const router = express.Router();

router
  .get("/share", (req, res) => res.send(share))
  .get("/room", (req, res) => res.send(share.room))
  .get("/myExercises", (req, res) => res.send(share.myExercises))
  .get("/room/other", (req, res) => {
    console.log("CURRENT ROOM: " + share.room.players.length);
    let person = share.room.players.find(x => x.fbid == req.body.fbid);
    console.log(person);
    if (person) {
      person = {
        name: req.body.name,
        id: share.room.players.length,
        myExercises: req.body.myExercises,
        fbid: req.body.fbid,
        picture: req.body.picture
      };
    }
    var index = share.room.players.indexOf(person)
    
    console.log("Person found: " + person + " at index= " + index);
    res.send(person);
  })
  .post("/room/otherExercises", (req, res) => {
    //console.log(req);
    share.room.otherExercises = req.body.myExercises;
    //console.log(share.otherExercises);
    res.status(201).send(share.otherExercises);
  })
  .post("/myExercises", (req, res) => {
    //console.log(req.body);
    exer = { name: req.body.exerciseName, reps: req.body.reps, weight: req.body.weight };
    share.myExercises.push(exer);
    ///console.log(share.myExercises);
    res.status(201).send(exer);
  })
  .post("/room/players", (req, res) => {
    console.log(req.body.myExercises);
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
        console.log(share.room.players);
      }
      //console.log(person);
      res.status(201).send(person);
    } else {
      res.status(403).send("Invalid Password");
    }
  });

module.exports.router = router;
