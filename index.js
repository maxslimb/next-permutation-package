var permutation = function (arr) {
    let start = 0
    let end = arr.length - 1
    let isEnd = false
    for (let i = end; i > 0; i--) {
      if (arr[i - 1] < arr[i]) {
        start = i - 1
        break
      } else if (i - 1 === 0) {
        isEnd = true
        break
      }
    }
    if (isEnd) {
      return true
    }
    for (let i = end; i > start; i--) {
      if (arr[i] > arr[start]) {
        let temp = arr[i]
        arr[i] = arr[start]
        arr[start] = temp
        break
      }
    }
    start += 1
    while (start < end) {
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start += 1
      end -= 1
    }
    return false
  }
  
  var next_permutation = function (str) {
    str += ''
    if (!str) {
      throw Error('str must be a valid string')
    }
    let arr = str.split('')
    permutation(arr)
    return arr.join('')
  }
  
  module.exports = next_permutation;