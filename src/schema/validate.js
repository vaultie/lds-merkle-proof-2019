const schema = require('./schema.json')
const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile(schema)

module.exports = validate