const UserModel = require('../../models/AuthModel/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const allUser = async (req, res) => {

    const users = await UserModel.find({});

    return res.status(200).json({ status: true, users });
}

const register = async (req, res) => {

    const { username, email, password, role } = req.body;

    try {

        const user = await UserModel.findOne({email});

        if(user){

            return res.status(409).json({status: false, msg : "User Already Exists."});
        }

        await UserModel.create({
            username,
            email,
            password : await bcrypt.hash(password, 12),
            role : role || 'Hotel Manager',
        });
        
        return res.status(201).json({status : true, msg : 'User Register Successfully.'})

    }catch(err){

        return res.status(500).json({status : false, msg : 'Server Error.'});
    }
    
}

const login = async (req, res) => {

    const { email, password } = req.body;

    try{

        const user = await UserModel.findOne({email});

        if(!user){

            return res.status(409).json({status: false, msg : "User Not Found."});
        }

        const checkPass = await bcrypt.compare(password, user.password);

        if(checkPass){

            const token = await jwt.sign({ id : user._id, role : user.role }, 'Royella-Hotel-API-Key');

            return res.status(200).json({status : true, token, msg : 'User Login Succesfully.'});

        }else{

            return res.status(406).json({status : false, msg : 'Password Must Be Wrong Try Again.'});
        }

    }catch(err){
        
        return res.status(500).json({status : false, msg : 'Server Error.'});
    }

}

module.exports = { allUser, register, login };