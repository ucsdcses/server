// Get dependencies
const express = require('express');
const router = express.Router();
const graph = require('fbgraph');
const strftime = require('strftime');

// Number of events to grab for the homepage
const NUM_EVENTS = 6;
// CSES Page URL
const FACEBOOK_EVENT_URL = '/186014001799312/events';

// set access token and secret, more info on fb graph docs
graph.setAccessToken(process.env.accessToken);
graph.setAppSecret(process.env.appSecret);

/* GET Facebook Events. */
router.get('/', (req, res) => {

    // grab events from cses page
    graph.get(FACEBOOK_EVENT_URL, (err, events) => {
        // Let the front end component handle any errors
        if (err) {
            res.send(null);
            return;
        }

        // Grab only the first three events
        events = events['data'].slice(0, NUM_EVENTS);

        // For each event, we do some formatting of the json object, and attach
        // the event's cover picture through an additional api call.
        formatEventInfo(events).then((eventArray) => {
            res.send(eventArray);
        });
    });
});

function formatEventInfo(events, res) {
    // We will create an array of events to send back to the front end
    var eventArray = [];
    var picturePromiseArray = [];

    events.forEach((happening, index) => {

        // Event description and date formatting
        happening['description'] = happening['description'].split('\n')[0];
        happening['hour_time'] = strftime('%l:%M %P',
            new Date(happening['start_time']));
        happening['start_time'] = strftime('%B %d, %Y',
            new Date(happening['start_time']));

        // Set the index properly to the current happening
        eventArray.push(happening);

        // Grab the pictures of the events
        picturePromiseArray.push(grabPicture(happening));
    });

    return Promise.all(picturePromiseArray).then(() => {
        eventArray.reverse();
        return eventArray;
    });
}

function grabPicture(happening) {
    return new Promise((resolve) => {
        graph.get('/' + happening['id'] + '?fields=cover', (err, picture) => {
            if (!err) {
                happening['cover'] = picture['cover']['source'];
            }

            resolve('Finished');
        });
    });
}

module.exports = router;
