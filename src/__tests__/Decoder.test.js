const Decoder = require('../Decoder')
const proofValue = require('./proofValue.json')

const resultBase58 = 'z6nGv6rMRybRe9CuMzbQbdu7sA858v1d13JU3hoAr1x93cheinB35kDXqCvaA93WTLWGtLZMdQSvvNCxEMZPhLvDa4CbUYkm4pCwBe7kCZAsuwHZwHxgyzCbRUWFbMXHhkVSHoPYmPzfi4arfHKMgKSurZ7oqe3GHRdi78TbHGvA65edK8JBEdTUt8SpCdc7wz5qiwj3THtcNAXfgK4LmCAu4fq8CnjLcMtGoEdfXfjy3turtaTapyM3katuYKAzbJF3FiE8i8NXBsiBnEbvKk7k'

describe('Decoder', () => {
  test('should create instance from valid props', () => {
    const decoder = new Decoder(resultBase58)
    expect(decoder).toBeDefined()
  })

  test('should throw error with invalid props', () => {
    try {
      new Decoder('')
    }
    catch (err) {
      expect(err).toBeDefined()
      expect(err.message).toBe('Base58 string is invalid. Cannot construct Decoder.')
    }
  })

  test('should decode a valid proofValue', () => {
    const decoder = new Decoder(resultBase58)
    const result = decoder.decode()
    
    expect(result).toEqual(proofValue)
  })
})