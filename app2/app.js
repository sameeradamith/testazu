var express = require('express')
var app = express()

app.get('/app2', function (req, res) {
  res.send('Hello World! APP2')
})

app.listen(5001, function () {
  console.log('Listening on port 5001...')
})