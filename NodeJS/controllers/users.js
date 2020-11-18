const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/users');


// => localhost:3000/users
// ----------------------get all data-----------------------
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
         else 
         { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});
// --------------------get data with id -------------------------
router.get('/:username', (req, res) => {
    //console.log("req.param.username: ",req.params.username);
    var username =req.params.username;
    User.find({username :username}, function(err, result) 
    {   
        //console.log("get data of user"+result);
        
        if(result !== null)
        {
            
            res.send(result);
        }
        else
        {   
            //res.setHeader('Content-Type', 'text/plain');
            res.send([]);
        }
    });

});



// -------------------------insert data -------------------

router.post('/', (req, res) => {
    console.log("in post user backend: ",req.body);
    var emp = new User({

        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


// -------------------------update data-----------------------------

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    };
    User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
// --------------------------delete data----------------

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;