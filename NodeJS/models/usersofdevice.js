const mongoose = require('mongoose');

var usersofdevice = mongoose.model('usersofdevice',{
    username :{ type: String },
    userId : { type: String },
    MobileNo: { type: String },
    email: { type: String },
    DeviceName : { type: String },
    DepartmentName:{type :String}


    
}
);

module.exports = { usersofdevice };