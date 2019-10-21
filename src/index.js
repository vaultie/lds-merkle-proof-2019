const cbor = require('cbor')
const { Map } = require('cbor')
const multibase = require('multibase')
const _ = require('lodash')
let json = require('./test.json')

json.merkleRoot = cbor.encode(Buffer.from(json.merkleRoot, 'hex'))
json.targetHash = cbor.encode(Buffer.from(json.targetHash, 'hex'))

json.path = _.flatten(json.path.map(item => {
  return Object.keys(item).map(key => {
    return new Map([[0, Buffer.from(item[key], 'hex')]])
  })
}))

json.anchors = json.anchors.map(anchor => {
  return new Map([[0, Buffer.from(anchor.sourceId, 'hex')], [1, anchor.type]])
})

const jsonCbor = cbor.encode(json)
console.log(jsonCbor.toString('hex'))
const jsonCborBase58 = multibase.encode('base58btc', jsonCbor)

console.log(jsonCborBase58.toString())
console.log(jsonCborBase58.toString().length)