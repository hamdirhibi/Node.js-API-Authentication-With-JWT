const express = require('express'); 
const app = express (); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv') ; 
const bodyParser = require('body-parser');
//import routes 
const authRoute = require ('./routes/auth');
const postsRoute = require('./routes/posts'); 

dotenv.config() ; 


//Connect to DB 
mongoose.connect(process.env.DB_CONNECT, 
{useNewUrlParser:true}   ,
()=>{console.log('connected to db ');  
})


 //Middlewares 
 app.use(express.json())
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
// route middlewares 
app.use('/api/user',authRoute) ; 
app.use('/api/posts',postsRoute); 

app.listen (3000, ()=>{
console.log('server up and running ');
}) 