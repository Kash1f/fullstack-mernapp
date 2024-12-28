import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.json())

app.post('/api/products', (req, res) => {
  const product = req.body

  if(!product.name || !product.price || !product.image) {
    return res.status(400).json({ sucess: false, message: 'Please provide all the required fields' })
}})

console.log(process.env.MONGO_URI)



app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
