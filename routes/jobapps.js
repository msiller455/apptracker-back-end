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

// GET JOB APP
router.get('/:id', async(req, res) => {
  try{
    const foundApp = await JobApp.findById(req.params.id)
    res.json({jobApp: foundApp})
  } catch(err) {
    console.log(err)
    res.send(err)
  }
})

// EDIT JOB APP
router.put('/:id', async(req, res) => {
  try {
    const updatedJobApp = await JobApp.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({
      status: 200,
      data: updatedJobApp
    })
  } catch(err) {
    console.log(err)
    res.send(err)
  }
})

// DELETE JOB APP
router.delete('/:id', async(req, res) => {
  try {
    const deletedJobApp = await JobApp.findOneAndRemove(req.params.id)
    console.log(deletedJobApp, " has been deleted!")
  } catch(err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router;
