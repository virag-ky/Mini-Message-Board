const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    minLength: [2, 'Message must be minimum 2 characters long'],
    maxLength: [300, 'Message must be less than 300 characters'],
    required: true,
    trim: true,
  },
  user: {
    type: String,
    minLength: [2, 'Username must be minimum 2 characters long'],
    maxLength: [15, 'Username must be less than 15 characters'],
    required: true,
    trim: true,
  },
  added: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', MessageSchema);
