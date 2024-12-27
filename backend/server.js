import express from 'express'

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




