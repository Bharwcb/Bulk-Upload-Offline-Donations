var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3000, (err) => {
  if (err) {
    return console.log('Server error');
  }
  console.log('Server running on port 3000');
})