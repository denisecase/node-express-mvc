/**
 * @file app.js
 * The starting point of the application.
 * Express allows us to configure our app and use
 * dependency injection to add it to the http server.
 * 
 * The server-side app starts and begins listening for events.
 **/
const http = require('http')  
const express = require('express')  
const app = express()  // create an Express web app
const server = http.createServer(app)  // pass in the Express app to our http server
const path = require('path')
const config = require('config')

// Use hosting values if available, otherwise default 
const environment = process.env.NODE_ENV || 'development'
const hostname = process.env.HOSTNAME || config.get("hostname")
const port = process.env.PORT || config.get("port")

// By default, Express does not serve static files. 
// use middleware to define a static assets folder 'public'
app.use(express.static('public'))

// load seed data
require('./utils/seeder.js')(app)  

// Use Express middleware to configure routing
const routing = require('./routes/router.js')
app.use('/', routing)  

app.listen(port, hostname, () => {
  console.log(`App running at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})