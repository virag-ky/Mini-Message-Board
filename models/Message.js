const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    minLength: 2,
    maxLength: 300,
    required: true,
    trim: true,
  },
  user: {
    type: String,
    minLength: 2,
    maxLength: 15,
    required: true,
    trim: true,
  },
  added: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', MessageSchema);
