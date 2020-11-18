const mongoose = require('mongoose');

var User = mongoose.model('users',{
    name: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    confirm_password: { type: String }

}
);

module.exports = { User };