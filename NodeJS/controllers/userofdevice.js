const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { usersofdevice } = require('../models/usersofdevice');


// => localhost:3000/
// ----------------------get all data-----------------------
router.get('/', (req, res) => {

    //-------------join table ------------------
    var jointable =usersofdevice.aggregate([
    {
        $lookup:
          {
            from : "users",
            localFsield : "users.username",
            foreignField: "username",
            as : "alldetails"
          }
     }
     
    ]);
    console.log(jointable);//
    

    //---------------get all data-----------
    usersofdevice.find((err, docs) => {
        if (!err) { res.send(docs); 
                    //res.send(jointable);
                }
         else 
         { console.log('Error in Retriving usersofdevices :' + JSON.stringify(err, undefined, 2)); }
    });
});
// --------------------get data with id -------------------------
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    usersofdevice.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Retriving usersofdevice :' + JSON.stringify(err, undefined, 2)); }
    });
});

// -------------------------insert data -------------------

router.post('/', (req, res) => {
    console.log(req.body);
    var emp = new usersofdevice({

        username: req.body.username,
        userId: req.body.userId,
        MobileNo: req.body.MobileNo,
        email: req.body.email,
        DeviceName: req.body.DeviceName,
        DepartmentName: req.body.DepartmentName
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in usersofdevice Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


// -------------------------update data-----------------------------

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
       
        username: req.body.username,
        userId: req.body.userId,
        MobileNo: req.body.MobileNo,
        email: req.body.email,
        DeviceName: req.body.DeviceName,
        DepartmentName: req.body.DepartmentName
    };
    usersofdevice.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in usersofdevice Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
// --------------------------delete data----------------

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    usersofdevice.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in usersofdevice Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;