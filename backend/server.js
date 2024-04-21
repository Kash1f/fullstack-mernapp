import express from 'express'


const app = express() //this is the same as saying createServer in normal nodejs

app.get(express.json())

app.get('/',(req,res) => {
    res.status(200).json({"msg":"Hello User!"})
})

app.post('/',(req,res) => {
    res.status(200).json({"msg":"post request"})
})



app.listen(4000, 'localhost', ()=>console.log("Listening to port 4000"))


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

//THIS WAS ALL ABOUT RESPONDING AND NOT GETTING ANYTHING FROM THE USER

//WE WOULD USE THE REQUEST BODY TO RECEIVE THE DATA IN CASE OF FORM AND POSTS EXAMPLE. AS YOU SEE IN THE POSTMAN WE SEND THE DATA 
//USING RESPONSE BODY SO THE ACTUAL DATA IS INSIDE THE BODY OF A REQ OR RES

//
//
// middleswares can be seen as checkpoints between a client and a server for example when we request a webpage, the middleware comes in the middle and says is this request something that I want/can handle then its going to respond with it and then end the response or go to the next one if it is specified to go to the next one so for our project we would create our own middleware
//
//
//
//







