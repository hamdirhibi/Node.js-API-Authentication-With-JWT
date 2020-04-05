const router = require('express').Router() ; 
const User = require('../models/User');
const {registerValidation,loginvalidation} = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//Register 
router.post('/register',  async (req,res)=>{

    //Data Validation 
     const {error} =  registerValidation    (req.body);
   
     if (error) return res.status(400).send(error.details[0].message)

    //checking if email exist 
    const emailExist = await User.findOne({
        email : req.body.email 
    })

    if (emailExist) return res.status(400).send('email exist try to change it ') ; 


    //Hash passwords
    const salt = await bcrypt.genSalt(10);  
    const hashPassword = await bcrypt.hash(req.body.password,salt);




    const user = new User ({
       name : req.body.name ,
       email : req.body.email , 
       password : hashPassword  

        });
        try {
            const savedUser = await user.save()
            res.send({
                user: savedUser._id 
            }); 
        }catch (err){
            res.status(400).send(err); 
        }
         })


         

///Login 

router.post('/login', async (req,res)=>{

    const {error} = loginvalidation(res.body) ; 

    if (error) return res.status(400).send(error.details[0].message) ; 

    const user = await User.findOne({
        email : req.body.email  
    }) 
    if (!user) return res.status(400).send("Email  is wrong"); 
    
    
    //PASSWORD IS CORRECT 
    const validPass= await bcrypt.compare(req.body.password,user.password); 
    if (!validPass) return res.status(400).send('Invalud Password')

    const token = jwt.sign({_id : user._id }, process.env.TOKEN_SECRET)
        
    res.header('auth-token' , token ).send(token);


})







module.exports = router ; 