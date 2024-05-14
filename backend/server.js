import express from "express";
import { postRoutes } from "./routes/postRoutes.js";
import mongoose from "mongoose";

const app = express(); //this is the same as saying createServer in normal nodejs

app.use(express.json());

app.use("/api/posts", postRoutes); //posts is a prefix here

//to connect to the database
mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to DB successfully");
    app.listen(4000, 'localhost', ()=>console.log("Listening to port 4000"))
  })
  .catch((err) => console.log(err));















  

//Routes in ExpressJs

//EXAMPLE FOR GET REQUEST
//res.send(""Hello User"")

//SETTING STATUS CODE MANUALLY BY ENTERING HTML STATUS CODE
//res.status(200).send("Hello User")

//SENDING JSON DATA AS DATA IS SENT AS JSON AND NOT PLAIN TEXT
//res.status(200).json({"msg":"Hello User!"})

//EXAMPLE FOR POST REQUEST
//same as above ===>
//app.post('/',(req,res) => {
//     res.status(200).json({"msg":"post request"})
// })

//MIDDLE WARES IN EJS:

//THIS WAS ALL ABOUT RESPONDING AND NOT GETTING ANYTHING FROM THE USER

//LET'S SAY WE HAVE FORM AND THE USER REGISTERS AND WE WANT TO GRAB THE USERNAME
//PASSWORD OR THEY MAKE A POST, WE WANT TO GET THE TITLE OR THE BODY.

//WE WOULD USE THE REQUEST BODY TO RECEIVE THE DATA IN CASE OF FORM AND POSTS EXAMPLE. AS YOU SEE IN THE POSTMAN WE SEND THE DATA USING RESPONSE BODY SO THE ACTUAL DATA IS INSIDE THE BODY OF A REQ OR RES.

//IN POSTMAN, IN THE REQ SECTION WE ALSO HAVE A BODY AND IF SOME RAW TEXT IS SENT, WE WON'T GET ANYTHING BCZ WE ARE NOT HANDLING THE REQ BODY YET
//SO IF WE console.log(req.body) WE WILL GET undefined. EVEN THOUGH WE HAVE SOMETHING IN THE BODY BUT WE HAVE TO TELL OUR APP TO LISTEN FOR REQUEST OR WE ARE EXPECTING SOMETHING IN THE REQ BODY

//IN THIS CASE WE WANT TO ACCEPT JSON AND WE CAN DO THAT USING ANOTHER METHOD ON THE app instance AND THAT IS THE use() method. "app.use()".

//use() method is a way to tell our app to use certain things and it accepts a middleware

// middlewares can be seen as checkpoints between a client and a server for example when we request a webpage, the middleware comes in the middle and says is this request something that I want/can handle then its going to respond with it and then end the response or go to the next one if it is specified to go to the next one so for our project we would create our own middleware. *

//

// CODE FOR MIDDLEWARES IN ExpressJs topic:
//
//
//

//CONNECT TO DATABASE


//to connect to the database
mongoose.connect("mongodb://localhost:27017")
.then(() => {
  console.log("Connected to DB successfully");
  app.listen(4000, 'localhost', ()=>console.log("Listening to port 4000"))
})
.catch((err) => console.log(err));



