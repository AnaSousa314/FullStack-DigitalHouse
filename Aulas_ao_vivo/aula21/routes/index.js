var express = require('express');
var router = express.Router();

const cards = require('../data/card') 

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(cards)
  res.render('index');
});

module.exports = router;
