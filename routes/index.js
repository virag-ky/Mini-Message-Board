const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Get all messages
router.get('/', async (req, res) => {
  const messages = await Message.find({});
  res.render('index', { title: 'Mini Message Board', messages });
});

// Get the form page
router.get('/new', (req, res) => {
  res.render('form');
});

// Create new message
router.post('/new', async (req, res) => {
  const { text, user } = req.body;

  const newMessage = new Message({ text, user });
  await newMessage.save();

  res.redirect('/');
});

module.exports = router;
