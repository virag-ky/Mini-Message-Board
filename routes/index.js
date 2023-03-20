const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hello there!',
    user: 'Maisy',
    added: new Date().toLocaleDateString(),
  },
  {
    text: 'Do project',
    user: 'Virag',
    added: new Date().toLocaleDateString(),
  },
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
