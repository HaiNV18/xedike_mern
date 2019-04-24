const _ = require('lodash')
const validator = require('validator');

const abc = {}

console.log(_.isEmpty(abc))
console.log(validator.isEmpty(abc))