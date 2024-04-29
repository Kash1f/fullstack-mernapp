import express from 'express'

const router = express.Router()

//this get method is a middleware, when we request the homepage this one checks if the method is get and the URL is homepage, then its going to respond with this hello user message and stop so it will not go to the next one but if it doesn't go to the next one *

router.get('/about',(req,res) => {
    res.status(200).json({"msg":"Hello User!"})
})

router.post('/',(req,res) => {

    console.log(req.body);
    res.status(200).json({"msg":"post request"})
})

export { router as postRoutes }