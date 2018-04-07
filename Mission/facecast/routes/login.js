var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next){
    res.render('login',{ title: 'Express'});
});

router.post('/test', function(req, res){
    var username1 = req.body.username;
    var password1 = req.body.password;
    console.log(username + password);
    User.findOne({username: username1, password: password1}, function(err, user){
        if(err){
            console.log(err);
        }
        if(!user){
            return res.status(404).send();
        }
        console.log('reussi');
        
    });
});
module.exports = router;