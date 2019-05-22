const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/users')

// Login
router.post('/login', async(req, res) => {
    try {
        const loggedUser = await User.findOne({ email: req.body.email })
        if(loggedUser) {
            if(bcrypt.compareSync(req.body.password, loggedUser.password)) {
                req.session.user = loggedUser
                req.session.message = ''
                req.session.logged = true
                res.json({loggedUser, isLoggedIn: true})
            } else {
                res.json({message: "Incorrect password", isLoggedIn: false})
            }
        } else {
            res.json({message: "Incorrect email", isLoggedIn: false})
        }
    } catch(err) {
        res.send(err)
    }
})

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) return console.log(err)
        res.json({message: "User logged out"})
    }) 
})

module.exports = router