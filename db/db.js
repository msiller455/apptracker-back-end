const mongoose = require('mongoose')
const connectionString = process.env.DATABASE_URL

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`)
})

mongoose.connection.on('error', (err) => {
    console.log(`Error: ${error}`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${connectionString}`)
})