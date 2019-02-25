/** 
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Denise Case <dcase@nwmissouri.edu>
*
*/

// bring in mongoose 
// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: false // change this
  },
  given: {
    type: String,
    required: false,
    default: 'Given'
  },
  family: {
    type: String,
    required: false,
    default: 'Family'
  },
  city: {
    type: String,
    required: true,
    default: 'Maryville'
  },
  state: {
    type: String,
    required: true,
    default: 'MO'
  },
  zip: {
    type: String,
    required: true,
    default: '64468'
  },
  country: {
    type: String,
    required: true,
    default: 'USA'
  },
  country: {
    type: String,
    required: true,
    default: 'http://yourwebsite.com'
  }

})
module.exports = mongoose.model('Developer', DeveloperSchema)
