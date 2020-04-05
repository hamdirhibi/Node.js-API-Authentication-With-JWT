
///Validation 
const Joi = require('joi');





//register validatino 
const registerValidation = (data)=>{
    const schema = Joi.object().keys( {
        name :  Joi.string()
        .min(6)
        .required(), 
        
        email : Joi.string()
        .min(6)
        .required()
        .email(),
        
        password : Joi.string()
        .min(6)
        .required() 
    }
    )
    
    return Joi.validate(data,schema) ; 
    
    
    }

    


//login validatino 
const loginValidation = (data)=>{
    const schema = Joi.object().keys( {
       
        
        email : Joi.string()
        .min(6)
        .required()
        .email(),
        
        password : Joi.string()
        .min(6)
        .required() 
    }
    )
    
    return Joi.validate(data,schema) ; 
    
    
    }
    

module.exports.registerValidation = registerValidation  ;
module.exports.loginvalidation = loginValidation  ;
