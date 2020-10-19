'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

vat TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);