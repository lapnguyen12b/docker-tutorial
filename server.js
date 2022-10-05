const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello Docker'
  })
})

app.listen(3000, () => {
  console.log('Server is runner in Port 3000');
})