// Get dependencies
const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const post = require()

router.get('/', (req, res) => {
res.send([]);
    // grab members from cses page
    var MongoClient = mongodb.MongoClient;

    var newSeats = new mongoose.Schema({
      //var  type
      room: Number,
      seatNumber: Number
  });

    //mongoose schema into a mongoose model
    var Seats = mongoose.model("Seats", newSeats)

    MongoClient.connect(DB_URL,function(err,db){
        // Let the front end component handle any errors
        if (err) {
            res.send(err);
            return;
        }

        //Grab all the members info and format them
        var collection = db.collection('newSeats');
        console.log("here");

        //5. Is finding records necessary or is there something else I should use?
        collection.find({}).toArray(function(err,newSeats){
            // Let the front end component handle any errors
            if (err) {
                res.send(null);
                return;
            }

            //1. making the document attempt
            var addSeat = new newSeats({
              room: req.body.room;
              seatNumber: req.body.seatNumber;
          });



          //or, cause wouldn't a post request save the data to a new http url?
          // 3. saving/persisting instance? the document in the url attempt
          // does it store modified values into the DB_URL database?
          //
          // var bob
          // bob.save
          //    var story
          //    story.save //story is saved in bob, so what am I saving to and how is it persisting if it is?
          addSeat.save(function(err, newUser){
              if(err) res.end(null);
              return;
          });
pers


           //6. ??? Still need this?
            res.send(newSeats);
        });
    });
//app.use uses another function in a specific directory
//req
//post request, persist, data and database node, and express,
//schema
});


module.exports = express.Router(); //4. is express.Router the stuff I saved?
//module.exports??? It sends it to the router I
// understand that but step by step model would help
