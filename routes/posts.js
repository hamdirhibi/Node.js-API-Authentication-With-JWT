const router = require('express').Router() ; 
const verify = require('./verifyToken')




router.get('/', verify.auth , (req,res)=>{

   res.send(req.user) ;
})

module.exports = router ; 