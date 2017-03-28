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

  // grab events from cses page
  graph.get('/2202850342/events', (err, events) => {
    if ( err ) {
      res.send( '<h1>Events could not be grabbed!</h1>' );
      return;
    }

    // Grab only the first five events
    events = events['data'].slice(0,3);

    // We are going to build the html for the list of events
    let html = '';
    let eventCounter = 0;
    const eventArray = ['', '', '', '', ''];

    // Array of pictures for each of the events
    const picURLarray = [0, 0, 0, 0, 0];

    // Fore each event, grab its picture, and then when you get it, make the
    // event's html. Then, add it in its proper position in the eventArray,
    // and increment the number of events seen. If we have seen five events,
    // then put everything into one string and send the respose required.
    events.forEach( (happening, index) => {
      graph.get('/'+happening['id']+'?fields=cover', (err, picture) => {
        eventArray[index] += '<div class="event">';
        if ( !err ) {
          picURLarray[index] = picture['cover']['source'];

          // Event name and picture
          eventArray[index] += '<div class="event-img-container">';
          eventArray[index] += '<div class="event-img-overlay" style="background-image: url(';
          eventArray[index] += picURLarray[index] + ');">';
          eventArray[index] += '<h4>' + happening['name'] + '</h4>';
          eventArray[index] += '</div></div>';

        }
        else {
          eventArray[index] += '<h4>' + happening['name'] + '</h4>';
        }

        // Event date
        eventArray[index] += '<p class="event-date inline">';
        eventArray[index] += '<i class="fa fa-calendar-o"></i>';
        eventArray[index] += strftime('%B %d, %Y', 
          new Date(happening['start_time'])) + '</p>';

        // Event location
        if ( happening['place'] ) {
          eventArray[index] += '<p class="event-location"><i class="fa fa-map-marker"></i>';
          eventArray[index] += happening['place']['name'] + '</p>';
        }
        eventArray[index] += '<p class="event-info">' + 
          happening['description'].split('\n')[0] + '</p>';

        // Event link
        eventArray[index] += '<a class="event-link-btn" href="https://www.facebook.com/events/';
        eventArray[index] += happening['id'] + '/" target="_blank" >Facebook Event Page ';
        eventArray[index] += '</a>';

        eventArray[index] += '</div>';

        eventCounter++;

        if ( eventCounter === 3 ) {

          // loop through event array, adding events
          eventArray.forEach( (eventHtml) => {
            html += eventHtml;
          });

          res.send(html);
        }
      });
    });

  });
});

module.exports = router;
