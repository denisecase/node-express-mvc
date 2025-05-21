/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')

console.log('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  console.log('Request to /')
  res.sendFile('index.html')
})

router.get('/index', (req, res, next) => {
  console.log('Request to /index')
  res.sendFile('index.html')
})

// Route requests that start with '/dev' to a particular controller
router.use('/dev', require('../controllers/developer.js'))

// Add a reference to the new instructor controller
const instructorController = require('../controllers/instructor.js')

// Use router.use to route requests that start with '/instructor' to the instructor controller
router.use('/instructor', instructorController)

console.log('END routing')
module.exports = router
