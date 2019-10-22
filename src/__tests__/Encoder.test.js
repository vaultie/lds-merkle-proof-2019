const Encoder = require('../Encoder')
const proofValue = require('./proofValue.json')

const resultBase58 = 'z6nGv6rMRybRe9CuMzbQbdu7sA858v1d13JU3hoAr1x93cheinB35kDXqCvaA93WTLWGtLZMdQSvvNCxEMZPhLvDa4CbUYkm4pCwBe7kCZAsuwHZwHxgyzCbRUWFbMXHhkVSHoPYmPzfi4arfHKMgKSurZ7oqe3GHRdi78TbHGvA65edK8JBEdTUt8SpCdc7wz5qiwj3THtcNAXfgK4LmCAu4fq8CnjLcMtGoEdfXfjy3turtaTapyM3katuYKAzbJF3FiE8i8NXBsiBnEbvKk7k'

describe('Encoder', () => {
  test('should create instance from valid props', () => {
    const encoder = new Encoder(proofValue)
    expect(encoder).toBeDefined()
  })

  test('should throw error with invalid props', () => {
    try {
      new Encoder({})
    }
    catch (err) {
      expect(err).toBeDefined()
      expect(err.message).toBe('JSON is invalid. Cannot construct Encoder.')
    }
  })

  test('should encode a valid proofValue', () => {
    const encoder = new Encoder(proofValue)
    const result = encoder.encode()

    expect(result.toString()).toEqual(resultBase58)
  })
})