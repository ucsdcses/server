'use strict';

const express = require('express');
const router = express.Router();
const graph = require('fbgraph');
const strftime = require('strftime');

// set access token and secret, more info on fb graph docs
graph.setAccessToken(process.env.accessToken);
graph.setAppSecret(process.env.appSecret);

// Define the route for grabbing the
// events using the graph api.
router.get('/', (req, res) => {

  const date = new Date('January 1, 2017');
  const url = '/186014001799312/events';
  
  // grab events from cses page
  graph.get(url, (err, events) => {
    if ( err ) {
      res.send( '<h1>Events could not be grabbed!</h1>' );
      return;
    }

    // Grab only the first five events
    events = events['data'].slice(0,3);

    // We are going to build the html for the list of events
    let eventCounter = 0;
    const eventArray = [0, 0, 0];

    // For each event, we do some formatting of the json object, and attach 
    // the event's cover picture through an additional api call.
    events.forEach( (happening, index) => {

      // Event description and date formatting
      happening['description'] = happening['description'].split('\n')[0];
      happening['hour_time'] = strftime('%l:%M %P', 
        new Date(happening['start_time']));
      happening['start_time'] = strftime('%B %d, %Y', 
        new Date(happening['start_time']));

      // Set the index properly to the current happening
      eventArray[index] = happening;

      // Grab the pictures of the events
      graph.get('/'+happening['id']+'?fields=cover', (err, picture) => {
        if ( !err ) {
          happening['cover'] = picture['cover']['source'];
        }

        // Counter to handle the async
        eventCounter++;
        if ( eventCounter === 3 ) {
          eventArray.reverse();
          res.send(eventArray);
        }
      });
    });

  });
});

module.exports = router;
