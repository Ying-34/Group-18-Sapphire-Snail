var express = require('express');
var model = require('../models')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function (req, res, next) {
  // Get the data transmitted by the front end
  var datas = {
    username: req.body.username,
    password: req.body.password
  }
  // Define the data returned by the back end
  var info = {

  }
  if (!datas.username) {
    // If the user name is empty, execute
    info = {
      status: 1,
      data: {

      },
      message: "No user name entered"
    }
    res.send(info)
  } else if (!datas.password) {
    // If the password is empty
    info = {
      status: 1,
      data: {

      },
      message: "Input password"
    }
    res.send(info)
  }
  else {
    // The user name and password are not empty
    model.connect(function (db) {
      db.collection('login').find({
        name: datas.username,
        password: datas.password
      }).toArray(function (err, docs) {
        if (err) {
          info = {
            status: 1,
            data: {},
            message: "Wrong account name or password"
          }
        } else if (docs.length > 0) {
          info = {
            status: 0,
            data: {
              id : docs[0]._id,
              username : docs[0].name
            },
            message: "Login successful"
          }
        } else {
          info = {
            status: 1,
            data: {},
            message: "Login failed,try again"
          }
        }
        res.send(info)
      })
    })

  }
})
router.post('/register',function(req,res){
  // Get the data transmitted by the front end
  var datas = {
    username: req.body.username,
    password: req.body.password
  }
  // Define the data returned by the back end
  var info = {

  }
  if (!datas.username) {
    // If the user name is empty, execute
    info = {
      status: 1,
      data: {

      },
      message: "No user name entered"
    }
    res.send(info)
  } else if (!datas.password) {
    // If the password is empty
    info = {
      status: 1,
      data: {

      },
      message: "No password entered"
    }
    res.send(info)
  }
  else {
    // The user name and password are not empty
    model.connect(function (db) {
      db.collection('login').insertOne({
        name: datas.username,
        password: datas.password
      })
      info = {
        status: 1,
        data: {
          name:datas.username,
          password:datas.password
        },
        message: "login was successful"
      }
      res.send(info)
    })
  }
})
module.exports = router;