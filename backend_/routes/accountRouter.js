let loginDao = require('../dao/login-dao');
let express = require('express');

var router = express.Router();

router.get('/',function(req,res){
    res.send('Welcome to use Wiki Forum Login Function');
});

router.post('/register', async function(req, res){
    console.log(req.body.avatar);
    try{
        const response = await loginDao.register(req.body.username, req.body.password, req.body.avatar);
        res.json(response);
    }catch(err){
        res.status(500).json({
            errorMessage: 'Internal Server Error'
        });
    }
});

router.post('/login', async function(req, res){
    try{
        const response = await loginDao.login(req.body.username, req.body.password);
        res.json(response);
    }catch(err){
        res.status(500).json({
            errorMessage : 'Internal Server Error'
        })
    }
});

module.exports = router;