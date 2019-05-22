const mongoose = require('mongoose')

const jobappsSchema = new mongoose.Schema({
    role: {type: String},
    company: {type: String},
    dateApplied: {type: String},
    location: {type: String},
    contact: {
        name: String,
        number: String,
        email: String
    },
    website: {type: String}
})

const JobApp = mongoose.model('JobApp', jobappsSchema)

module.exports = JobApp