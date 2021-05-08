var express = require('express');
var router = express.Router();
var model = require('../models')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to use Wiki Forum Login Function');
});

router.post('/login',function(req,res){
    loginHandle(req,res)
  })
  router.post('/register',function(req,res){
    register(req,res)
  })
  
  function loginHandle(req, res) {
    // Get the data transmitted by the front end
    var datas = {
      username: req.body.username,
      password: req.body.password
    }
    // Define the data returned by the back end
    var info = {
  
    }
    res.setHeader("Access-Control-Allow_Origin","*")
    if (!datas.username) {
      // Execute when the user name is empty
      info = {
        status: 1,
        data: {
  
        },
        message: ", username can not be empty!"
      }
      res.send(info)
    } else if (!datas.password) {
      // Execute if the password is empty
      info = {
        status: 1,
        data: {
  
        },
        message: ", password can not be empty!"
      }
      res.send(info)
    }
    else {
      // The user name and password can not be empty
      model.connect(function (db) {
        db.collection('login').find({
          name: datas.username,
          password: datas.password
        }).toArray(function (err, docs) {
          if (err) {
            info = {
              status: 1,
              data: {},
              message: ",incorrect username or password!"
            }
          } else if (docs.length > 0) {
              // here's for how many rows for infor
            info = {
              status: 0,
              data: {
                id : docs[0]._id,
                username : docs[0].name
              },
              message: "Login successful!"
            }
          } else {
            info = {
              status: 1,
              data: {},
              message: "Login failed!"
            }
          }
          res.send(info)
        })
      })
  
    }
  }
  
  function register(req,res){
    // Get the data transmitted by the front end
    var datas = {
      username: req.body.username,
      password: req.body.password
    }
    // Define the data returned by the back end
    var info = {
  
    }
    res.setHeader("Access-Control-Allow_Origin","*")
    if (!datas.username) {
      // Execute when the user name is empty
      info = {
        status: 1,
        data: {
  
        },
        message: "Username can not be empty!"
      }
      res.send(info)
    } else if (!datas.password) {
      // Execute when the password is empty
      info = {
        status: 1,
        data: {
  
        },
        message: "Password can not be empty!"
      }
      res.send(info)
    } else if(datas.password.length<=6){
      info = {
        status: 1,
        data: {
  
        },
        message: "Incorrect format of username and password!"
      }
      res.send(info)
    }
    else {
      // The user name and password are not empty
      model.connect(async function(db){
        let infos = await db.collection('login').find({name:datas.username}).toArray()
        console.log(infos.length);
        if(infos.length>0){
          info = {
            status: 1,
            data: {
      
            },
            message: "Username has been registered!"
          }
          res.send(info)
        }else{
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
              message: "Registration successful!"
            }
            res.send(info)
          })
        }
      })
    }
  }

module.exports = router;
