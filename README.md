# file-read

Read file with specified size from head or tail.

## Usage

```js
const readFile = require('file-read')
const options = {
  /*
    `b` for bytes
    `kb` for kilobytes
    `mb` for megabytes
    `gb` for gigabytes
    `tb` for terabytes
  */
  size: '10', // decide how many bytes read from file. can be 10, 10kb, 10mb, 10gb and 10tb, refer to bytes lib.
  flag: 'r', // default is r,
  encoding: 'utf8', // default is utf8.
  tail: false // read file from tail or head.
}

console.log(readFile)
readFile('_yourFilePath_', options, function (err, data) {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

```

## TODO

* Finish unit test.
* Add Promise.