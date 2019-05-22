var express = require('express');
var router = express.Router();

const JobApp = require('../models/jobapps')

//GET ALL JOB APPS
router.get('/', async(req, res) => {
  try {
    const allJobApps = await JobApp.find({})
    res.json({
      status: 200,
      data: allJobApps
    })
  } catch(err) {
    console.log(err)
    res.send(err)
  }
})

// CREATE NEW JOB APP
router.post('/', async(req, res) => {
  try {
    const createdJobApp = await JobApp.create(req.body)
    res.json({
      status: 200,
      message: "New Job App Created",
      data: createdJobApp
    })
  } catch(err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router;
