const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ['admin', 'manager', 'receptionist', 'housekeeping', 'maintenance', 'food & beverage', 'HR', 'sales & marketing', 'finance' , 'IT & system Administrator'],
        default : 'manager',
        required : true, 
    },

});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;