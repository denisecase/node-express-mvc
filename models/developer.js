/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Denise Case <denisecase@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  city: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'Maryville'
  },
  state: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    default: 'MO'
  },
  zip: {
    type: String,
    minlength: 5,
    maxlength: 12,
    required: true,
    default: '64468'
  },
  country: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 'USA'
  },
  url: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'http://yourwebsite.com'
  }

})
module.exports = mongoose.model('Developer', DeveloperSchema)
