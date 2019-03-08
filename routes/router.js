/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const path = require('path')

console.log('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  console.log('Request to /')
  res.sendFile(path.join(__dirname, '../public/newPage.html'))
})

router.get('/index', (req, res, next) => {
  console.log('Request to /')
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Defer path requests to a particular controller
router.use('/dev', require('../controllers/developer.js'))

console.log('END routing')
module.exports = router
