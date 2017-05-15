var fsRead = require('../fs-read')
const fs = require('fs')
const path = require('path')
var filePath = path.join(__dirname, './file.txt')

fsRead.readFile(filePath, {
  size: 3,
  tail: true
}, (err, data) => {
  console.log(data)
})
