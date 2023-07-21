var express = require('express')
var app = express()

app.get('/app1', function (req, res) {
  res.send('Hello World! APP1')
})

app.listen(5000, function () {
  console.log('Listening on port 5000...')
})