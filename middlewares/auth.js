const jwt = require('jsonwebtoken');
const { login } = require('../controllers/AuthController/authController');

const auth = (roles) => {

    return (req, res, next) => {

        try{
    
            const token = req.header('Authorization').slice(7);
    
            const decode = jwt.verify(token, 'Royella-Hotel-API-Key');

            req.user = decode;
    
            if(roles.length > 0 && roles.includes(req.user.role)){
    
                next();
            }else{

                return res.status(401).json({status : false, msg : "Authentication Must Be Required."});
            }
    
    
        }catch(err){
    
            return res.status(500).json({status : false, msg : 'Internal Server Error.'});
        }
        
    }

}

module.exports = auth;