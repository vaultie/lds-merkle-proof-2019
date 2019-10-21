const { validate } = require('./schema')
const Keymap = require('./Keymap')

const cbor = require('cbor')
const multibase = require('multibase')
const _ = require('lodash')

class Encoder {
  constructor(json) {
    const valid = validate(json)
    if (!valid)
      throw new Error('JSON is invalid. Cannot construct Encoder.')
    
    this.json = json
  }

  constructRootMap() {
    return Object.keys(this.json).map(key => {
      let value = this.json[key]
      if (typeof value === 'string') {
        value = cbor.encode(Buffer.from(value, 'hex'))
      }
      if (value instanceof Array) {
        if (key === 'anchors') {
          value = this.constructAnchorsMap(value)
        }

        if (key === 'path') {
          value = this.constructPathMap(value)
        }
      }

      return [Keymap.root[key], value]
    })
  }

  constructAnchorsMap(anchors) {
    return anchors.map(anchor => 
      Object.keys(anchor).map(key => {
        let value = anchor[key]

        value = key === 'chain' 
          ? Keymap.chain[value] 
          : key === 'txHash' 
            ? cbor.encode(Buffer.from(value, 'hex'))
            : value

        return [Keymap.anchors[key], value]
      })
    )
  }

  constructPathMap(path) {
    return _.flatten(path.map(item => 
      Object.keys(item).map(key => [Keymap.path[key], cbor.encode(Buffer.from(item[key], 'hex'))]))
    )
  }

  encode() {
    const map = this.constructRootMap()
    const encoded = cbor.encode(map)
    return multibase.encode('base58btc', encoded)
  }
}

module.exports = Encoder