var express = require('express');
var model = require('../models')
var router = express.Router();

// var loginHandle = require('../funcs/login')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;