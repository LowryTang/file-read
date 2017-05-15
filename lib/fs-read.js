const bytes = require('bytes')
const fs = require('fs')

exports.readFile = readFile

/**
 *
 * @param {*} path
 * @param {
 *  flag,
 *  encoding,
 *  size,
 *  tail
 * } options
 */
function readFile (path, options, callback) {
  if (typeof options === 'function' && !callback) {
    callback = options
    options = {}
  }
  callback = callback || function () {}
  options = options || {}
  options = Object.assign({
    flag: 'r',
    encoding: 'utf8',
    tail: false
  }, options)
  console.log(options)
  if (options.size) {
    options.size = bytes.parse(options.size)
  }
  fs.open(path, options.flag, (err, fd) => {
    if (err) {
      return callback(err)
    }
    fs.fstat(fd, (err, stat) => {
      if (err) {
        return callback(err)
      }
      var fSize = stat.size
      var length = fSize
      var position = 0

      if (options.size < fSize) {
        length = options.size
      }
      if (options.tail) {
        position = fSize - length
      }
      console.log(length)
      var buffer = Buffer.alloc(length)
      fs.read(fd, buffer, 0, length, position, (err, bytesRead, data) => {
        fs.closeSync(fd)
        data = data.toString(options.encoding)
        callback(err, data)
      })
    })
  })
}
