import express from 'express'
import { MongoClient } from 'mongodb'

const app = express() //this is the same as saying createServer in normal nodejs

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








