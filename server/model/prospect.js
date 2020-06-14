const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: false
  },

  prospectName: {
    type: String,
    required: true
  },
  demographic: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  addedBy: {
    type: String,
    required: true
  },
  dateAdded: {
    type: String,
    required: false
  },
  setType: {
    type: String,
    required: true
  },
  howMany: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Customer',CustomerSchema);