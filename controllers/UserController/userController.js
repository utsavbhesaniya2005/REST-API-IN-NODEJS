const UserModel = require('../../models/UserModel/userModel');
const bcrypt = require('bcrypt');

const allUser = async (req, res) => {

    const users = await UserModel.find({});

    return res.status(200).json({ status: true, users });

    // if(users){
        
    //     return res.status(200).json({ status: true, users });
    // }else{

    //     return res.status(404).json({ status: true, msg : 'Users Not Found.' });
    // }
}

const register = async (req, res) => {

    try {
        
        const { username, email, password } = req.body;

        const user = await UserModel.findOne({email});

        if(user){

            return res.status(409).json({status: false, msg : "User Already Exists."});
        }else{

            bcrypt.hash(password, 12, async (err, hashPass) => {

                if(!err && hashPass){
    
                    await UserModel.create({
                        username,
                        email,
                        password : hashPass,
                    });
    
                    return res.status(201).json({status : true, msg : 'User Registered Successfully.'});
    
                }else{
    
                    return res.status(503).json({status : false, msg : 'Data Processing Error.'});
                }
            });
        }
        
    }catch(err){

        return res.status(400).json({status : false, msg : 'Server Error.'});
    }
    
}

module.exports = { allUser, register };