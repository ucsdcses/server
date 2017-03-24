'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Project = require('../models/Project');
const User = require('../models/User');
const request = require('request');

const config = require('../config');


/**
 * /api/showcase/project/
 * POST: To create a new project on the database
 *
 * EXPECTS: title, description, reCaptchaResponse, [repo], [imageUrl], [authors]. Also, authToken in the request header.
 * RESPONDS: 200 status code if all OK with {id: String}
 *            401 if user is unauthenticated/not logged in
 *            400 with error json
 *            500 for internal error
 */
router.post('/', (req, res) => {
  if (!req.userId)
    return res.sendStatus(401);

  if (!req.body.title || !req.body.description || !req.body.reCaptchaResponse)
    return res.status(400).json({error: 'Title, description or captcha not provided.'});

  request.post({
    url: 'https://www.google.com/recaptcha/api/siteverify',
    form: {
      secret: config.reCaptchaSecretKey,
      response: req.body.reCaptchaResponse
    }
  }, (error, response, body) => {
    if (!error && response && response.statusCode && response.statusCode == 200) {
      let data = JSON.parse(body);
      if (!data.success)
        return res.status(400).json({error: 'Captcha not completed. Stop being a robot!'});

      if (req.body.authors) {
        let authors = req.body.authors;
        let ids = [];
        for (let i = 0; i < authors.length; i++) {
          if (authors[i]._id == req.userId) // Someone is deliberately trying to F**k with us
            return res.status(400).json({error: 'Authors had \'me\' in it.'});

          ids.push(mongoose.Types.ObjectId(authors[i]._id));
        }
        ids.push(req.userId);
        req.body.authors = ids;
      } else {
        req.body.authors = [req.userId];
      }
      req.body.title = req.sanitize(req.body.title);
      req.body.description = req.sanitize(req.body.description);
      let newProject = new Project(req.body);

      newProject.save((err, project) => {
        if (err || !project) {
          return res.sendStatus(500);
        }

        res.status(200).json({id: project._id});
      });
    }
  });
});


/**
 * /api/showcase/project/cluster?timestamp
 * GET: Get 9 projects
 *
 * EXPECTS: [timestamp]. If not specified then sends latest 10 projects
 * RESPONDS: 200 status code if all OK with json: { projects: [], timestamp: number }.
 *                           projects will be empty if no more data is available.
 *            400 with error json
 *            500 for internal error
 */
router.get('/cluster', (req, res) => {
  let dateLimit = new Date();

  if (req.query.timestamp) {
    try {
      dateLimit = new Date(parseInt(req.query.timestamp));
    } catch (e) {
      return res.status(400).json({error: 'Invalid timestamp.'});
    }
  }

  Project.find({})
      .where('date').lt(dateLimit)
      .limit(9)
      .sort({ date: -1 })
      .exec((err, projects) => {
        if (err)
          return res.sendStatus(500);

        let finalProjects = [];

        for (let project of projects) {
          finalProjects.push({
            id: project._id,
            title: project.title,
            description: project.description,
            authors: project.authors,
            date: project.date,
            imageUrl: project.imageUrl
          });
        }

        let lastProject = projects[projects.length - 1];
        res.json({ projects: finalProjects, timestamp: (lastProject) ? lastProject.date.getTime() : req.query.timestamp });
      });
});


/**
 * /api/showcase/project?id
 * GET: Get project with id
 *
 * EXPECTS: id, [excludeMe]
 * RESPONDS: 200 status code if all OK with json: { title, description, id, repo, imageUrl
 *           authors: [firstName lastName email github facebookId owned] }
 *           400 with error json
 *           500 for internal error
 *
 */
router.get('/', (req, res) => {
  if (!req.query.id)
    return res.status(400).json({error: 'id expected in query string'});

  Project.findById(req.query.id, (err, project) => {
    if(err)
      return res.status(500).json({error: err.message});

    if (!project)
      return res.status(400).json({error: 'Invalid id.'});
    
    let toSend = {
      _id: project._id,
      title: project.title,
      description: project.description,
      website: project.website,
      repo: project.repo,
      imageUrl: project.imageUrl
    };

    User.find( {'_id': {$in: project.authors}}, 'firstName lastName email github facebookId', (err,authors) => {
      if(err || !authors) return res.sendStatus(500);

      toSend.authors = authors;

      toSend.owned = false;
      if (req.userId) {
        for (let i = 0; i < authors.length; i++) {
          if (authors[i]._id == req.userId) {
            toSend.owned = true;
            if (req.query.excludeMe)
              toSend.authors.splice(i, 1);
            break;
          }
        }
      }
      res.json(toSend);
    });
  });
});

/**
 * /api/showcase/project/
 * PUT: To edit a pre-existing project.
 *
 * EXPECTS: _id, title, description, [other Project fields]
 * RESPONDS: 200 status code if all OK
 *            401 if user is unauthenticated/not logged in
 *            400 with error json
 *            500 for internal error
 */
router.put('/', (req, res) => {
  if(!req.userId)
    return res.sendStatus(401);

  if (!req.body._id || !req.body.title || !req.body.description)
    return res.status(400).json({error: 'One or more required values missing.'});

  Project.findById(req.body._id, (err, project) => {
    if (err)
      return res.sendStatus(500);

    if (!project)
      return res.status(400).json({error: 'Invalid id of project.'});

    if (project.authors.indexOf(req.userId) === -1)
      return res.status(400).json({error: 'This project is not owned by you.'});
    
    if (req.body.authors) {
      let authors = req.body.authors;
      let ids = [];
      for (let i = 0; i < authors.length; i++) {
        if (authors[i]._id == req.userId) // Someone is deliberately trying to F**k with us
          return res.status(400).json({error: 'Authors had \'me\' in it.'});

        ids.push(mongoose.Types.ObjectId(authors[i]._id));
      }
      ids.push(req.userId);
      req.body.authors = ids;
    } else {
      req.body.authors = [req.userId];
    }

    req.body.title = req.sanitize(req.body.title);
    req.body.description = req.sanitize(req.body.description);

    Project.findByIdAndUpdate(req.body._id, req.body, (err, proj) => {
      if (err || !proj) {
        return res.sendStatus(500);
      }

      res.sendStatus(200);
    });
  });

});

/**
 * /api/showcase/project/
 * DELETE: To delete a pre-existing project.
 *
 * EXPECTS: id. Also, authToken in the request header.
 * RESPONDS: 200 status code if all OK
 *            401 if user is unauthenticated/not logged in
 *            400 with error json
 *            500 for internal error
 */
router.delete('/', (req, res) => {
  if (!req.userId)
    return res.sendStatus(401);

  if (!req.body.id)
      return res.status(400).json({ error: 'id not specified.'});

  Project.findById(req.body.id, (err, project) => {
    if (err)
      return res.sendStatus(500);

    if (!project)
      return res.status(400).json({error: 'Invalid id.'});

    let owned = false;
    for (var i = 0; i < project.authors.length; i++) {
      if (project.authors[i] == req.userId) {
        owned = true;
        break;
      }
    }

    if (!owned)
      return res.sendStatus(401);

    project.remove((err, project) => {
      if (err)
        res.sendStatus(500);

      res.sendStatus(200);
    });
  });
});


module.exports = router;
