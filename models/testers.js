/** 
*  Testers model
*  Describes the characteristics of each attribute in a tester resource.
*
* @author Gunashekar Koppula <s534628@nwmissouri.edu>
*
*/

// bring in mongoose 
// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const TesterSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: false // change this
  },
  Testing_Type: {
    type: String,
    required: false
    
  }
})
module.exports = mongoose.model('Tester', TesterSchema)
