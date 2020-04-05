# Node.js-API-Authentication-With-JWT

Hi everyone ! i hope you are good , so today we have to integrate JWT to ensure security in our applications ! you can find a lot of tutorial which can help in include this feature but here i try my best to cover all importants services you need to now. 

great so lets us move to the installation part: 

1- first of all you need to install Node js in your machine ? if you don't have to to download it from here : https://nodejs.org/en/download/ 


2- secondly go to the directory where you want to save this services 


3- open terminal by clicking on ctrl+alt+T if you use ubuntu or shift+rightmouseclick you will find open command windows here 


4- now you have to write : git clone https://github.com/hamdirhibi/Node.js-API-Authentication-With-JWT.git


5- write the change directory command on the terminal by typping : cd /Node.js-API-Authentication-With-JWT 


6- finnaly you need to install dependencies by passing on the terminal this command : npm install 


7- lets run it now by wirting : npm start 


Yess and its work now ! but if you have any questions about directories structure or how its work take look above you will find the responses of all questions you have :


humm now we will talk about the rules of every directory in the project :

models : contain a models exemple of how objects will be presented on mango db , in our case you will find a user Schema that will be saved later on our data base 

router : 
  - auth.js : here we will catch the user requests and send them the appropriate response 
  - posts :  just a simple route to test how  the jwt work  
  - verifyToken :  contain auth function which get request in parameter and test if they have a valid token or not 


node modules : contain all dependancies needed to run this project for exemple : mangoose ( to communicate with data base ) , express ( to run express server and listen to requests  ) , joi ( to validate requests proprties ) ,dotenv , bodyParser ( parse the request body to let us work with ) 

validation.js : where we will include all proprties validations controle by using  Joi features , and you will find two functions registrationValidation and loginValidation ! and the constraints of validation of the each of them 


index.js : its our main js file , humm it the doors to enter to the application and the file who will be running first when we will run the application , where you find the database connection method , the middlewares integration ( mmm actually you don't need to know a lot of middlewares but you have to know that is like something who catch the requests before that can be distibuted to the appropriate route so if you need to do some modification of request before interacting with them you can use it )  . and the server listening function  (listening port : 3000) in our case . 


.env :  dotenv  it's file where we will save our passwords and criticals informations and when we will deploy our project those informations will be hidden .


package-lock.json : Package-lock is a large list of each dependency listed in your package.json, the specific version that should be installed, the location of the module (URI), a hash that verifies the integrity of the module . 


package.json : All npm packages contain a file, usually in the project root, called package. json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.










