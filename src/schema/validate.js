const schema = require('./schema.json')
const { validator } = require('@exodus/schemasafe')
const validate = validator(schema)

module.exports = validate
