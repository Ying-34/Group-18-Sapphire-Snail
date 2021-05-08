var express = require('express');
var router = express.Router();
var model = require('../models')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome to login ');
});

module.exports = router;
