// Get dependencies
const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

// Number of events to grab for the homepage
/* const NUM_EVENTS = 6; */
// CSES Page URL
/* const FACEBOOK_EVENT_URL = '/186014001799312/events'; */
const DB_URL = 'mongodb://localhost:27017/members'

/* GET Member Data. */
router.get('/', (req, res) => {

    // grab members from cses page
    var MongoClient = mongodb.MongoClient;

    MongoClient.connect(DB_URL,function(err,db){
        // Let the front end component handle any errors
        if (err) {
            res.send(null);
            return;
        }

        //Grab all the members info and format them
        var collection = db.collection('members');

        collection.find({}).toArray(function(err,member){
            // Let the front end component handle any errors
            if (err) {
                res.send(null);
                return;
            }

            res.send(member);
            });
        });
    });
});

//format the member info into different fields
function formatMembersInfo(members, res) {
    // We will create an array of members to send back to the front end
    var memberArray = [];

    members.forEach((person, index) => {

        // Member description and formatting


        // Set the index properly
        memberArray.push(person);
    });

    memberArray.reverse();
    return eventArray;
}

module.exports = router;
