# next-permutation-package

## Intro
`next_permutation` is a function of full permutation, which can receive a string s, and can return next string in the full permutation (if it has reached the last permutation, it will return the last one)

## Install
```
npm i @maxslimb/next-permutation
```
## Usage
```javascript
const NextPermutation = require('next-permutation')
 
let Str = '125'
let res = NextPermutation(Str)
console.log(res) 
```