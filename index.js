const cbor = require('cbor')
const multibase = require('multibase')
const json = require('./test.json')

const jsonCbor = cbor.encode(json)
console.log(jsonCbor)
const jsonCborBase58 = multibase.encode('base58btc', jsonCbor)
console.log(jsonCborBase58.toString())

const jsonCborDecodedBase58 = multibase.decode(jsonCborBase58)
console.log(jsonCborDecodedBase58)
const jsonCborDecoded = cbor.decode(jsonCborDecodedBase58)
console.log(jsonCborDecoded)