const Decoder = require('../Decoder')
const proofValue = require('./proofValue.json')
const mocknetProofValue = require('./mocknetProofValue.json')

const resultBase58 = 'z6nGv6rMRybRe9CuMzbQbdu7sA858v1d13JU3hoAr1x93cheinB35kDXqCvaA93WTLWGtLZMdQSvvNCxEMZPhLvDa4CbUYkm4pCwBe7kCZAsuwHZwHxgyzCbRUWFbMXHhkVSHoPYmPzfi4arfHKMgKSurZ7oqe3GHRdi78TbHGvA65edK8JBEdTUt8SpCdc7wz5qiwj3THtcNAXfgK4LmCAu4fq8CnjLcMtGoEdfXfjy3turtaTapyM3katuYKAzbJF3FiE8i8NXBsiBnEbvKk7k'
const mocknetResultBase58 = 'zYaPdLQCuei4vhe5Bdz4GjXD4iYkEZL1x2jgNjJArVBt29RUn14RZspAqFo2XDwKtTdBCRZtzxpTLwGhJxKv7TGeQQpBbgLgtM6vF15cBc4TBwd3sJc2ZxEjve6Ncuu1XMwczshC8injjzUpjLhhwKTijnUSdoxwj5jyv9CztRmkDajRZAQmaqgXuCG8BtoLqsbCubwbpbvEHPJrKjqHrt99C6zPx5X89C8eNMFFr5d7GSSWBbAHrwoCbjYvepm'

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

  test('should decode a mock proofValue', () => {
    const decoder = new Decoder(mocknetResultBase58)
    const result = decoder.decode()

    expect(result).toEqual(mocknetProofValue)
  })
})