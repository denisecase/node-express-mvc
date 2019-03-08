/** 
*  Developer controller
*  Handles requests related to developer resources.
*
* @author Gunashekar Koppula <s534628@nwmissouri.edu>
*
*/
const express = require('express')
const api = express.Router()
const Model = require('../models/testers.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find tester with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.testers.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id) 
  const data = req.app.locals.testers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// RESPOND WITH VIEWS  --------------------------------------------

// later

// RESPOND WITH DATA MODIFICATIONS  -------------------------------

// later

module.exports = api
