var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../models/users')

// ROUTES

// GET ALL USERS
router.get('/', async(req, res) => {
  try {
    const allUsers = await User.find({})
    res.json({
      status: 200,
      data: allUsers
    })
  } catch(err) {
    console.log(err)
    res.send(err)
  }
})

// CREATE NEW USER
router.post('/', async(req, res) => {
  req.body.password = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

  console.log(req.body, "hitting user")
  try {
    const createdUser = await User.create(req.body)
    res.json({
      status: 200,
      message: "Registration Successful",
      data: createdUser
    })
  } catch(err) {
    console.log(err)
    res.send(err)
  }
})

router.get('/:id', async(req, res) => {
  try {
    const foundUser = await User.findById(req.params.id)
    res.json({user: foundUser})
  } catch(err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router;
