/**
 * Author: Daniel Alemu
 * Sets a newSeats document with enough of a new seat
 *  to insert
 */

// Get dependencies
const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

//make new schema file
const server = require("../server")

//schema for defining documents
require("../models/LabUseData")

router.post('datapoint', (req, res) => {

            //CHECK FOR SECRET KEY, saving body of post request
            if (req.body.SECRET_KEY == SECRET_KEY) {
                res.send(null);
                return;
            }

            //making the document
            var addSeat = new LabUseData({
              seatId: req.body.seatId,
              timeStamp: req.body.timeStamp,
              loggedIn: req.body.loggedIn,
              roomNum: req.body.roomNum
          });


          addSeat.save(function(err, newPoint){

              //send back a .json object
              if(err) res.send("Fail to Save New DataPoint");
              return;
          });

            //sends the modules saved in new seats user
            res.send(addSeat);
      });

router.get('datapoint', (req, res) => {
  db.collection('LabUseData', function(err, LabCollection){
    if(err) res.send("Error Collecting Lab Objects");
    else res.send(LabCollection);
  });
});


module.exports = express.Router();
