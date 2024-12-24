import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.json())

app.post('/api/products', (req, res) => {
  console.log(req.body)
  res.send('Product added successfully')
})



app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
