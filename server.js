const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello Docker Tutorial'
  })
})

app.listen(3000, () => {
  console.log('Server is runner in port 3000');
  console.log('Hello Docker');
})