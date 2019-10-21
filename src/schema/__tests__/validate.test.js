const { validate } = require('../index')
const validSchema = require('./valid.json')
const invalidSchema = require('./invalid.json')


describe('validate schema', () => {

  test('checks correct schema', () => {
    expect(validate(validSchema)).toBeTruthy()
  });
  
  test('checks incorrect schema', () => {
    const valid = validate(invalidSchema)
    expect(valid).toBeFalsy()
  });
})

