const express = require('express');

const Tables = require('./projects-model');

const db = require('../data/db-config.js');

const router = express.Router();

//resources
router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Tables.addResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

router.get('/resources', (req, res) => {
  Tables.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
});

//projects
router.post('/projects', (req, res) => {
  const projectData = req.body;

  Tables.addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/projects', (req, res) => {
  Tables.getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get project' });
    });
});

//tasks
router.post('/tasks', (req, res) => {
  const taskData = req.body;

  Tables.addtask(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
router.get('/:id/tasks', (req, res) => {
  Tables.findTasks(req.params.id)
    .then((project) => {
      if (project.length) {
        res.json(project);
      } else {
        res.json({ message: 'no project for that id' });
      }
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

module.exports = router;
