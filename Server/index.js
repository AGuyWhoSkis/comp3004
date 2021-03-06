const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')

const jobsRoute = require("./routes/jobs")
const usersRoute = require("./routes/users")
const sitesRoute = require("./routes/sites")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/jobs', jobsRoute);
app.use('/users', usersRoute);
app.use('/sites', sitesRoute);

app.head('/', (req, res)=> {
    const response = {
        data: null,
        message: "Header information will be included here. Try /users/ or /jobs/"
    }

    res.send(response);
});

// Wrap express app in serverless http function
module.exports.handler = serverless(app)
