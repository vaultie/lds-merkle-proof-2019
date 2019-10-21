const Keymap = require('./Keymap')

const cbor = require('cbor')
const multibase = require('multibase')
const _ = require('lodash')

class Decoder {
  constructor(base58) {
    const valid = multibase.isEncoded(base58)
    if (!valid)
      throw new Error('Base58 string is invalid. Cannot construct Decoder.')
    
    this.base58 = base58
  }

  constructRootJSON(decoded) {
    const rootKeymap = _.invert(Keymap.root)

    return decoded.reduce((acc, val) => {
      const key = rootKeymap[val[0]]
      let value = val[1]

      if (value instanceof Array) {
        if (key === 'anchors') {
          value = this.constructAnchorsJSON(value)
        }
        if (key === 'path') {
          value = this.constructPathJSON(value)
        }
      }

      if (value instanceof Buffer) {
        value = cbor.decode(value).toString('hex')
      }
    
      acc[key] = value
      return acc
    }, {})
  }

  constructAnchorsJSON(anchors) {
    const anchorsKeymap = _.invert(Keymap.anchors)
    const chainKeymap = _.invert(Keymap.chain)

    return anchors.map((anchor) =>
      anchor.reduce((acc, val) => {
        let value = val[1]
        const key = anchorsKeymap[val[0]]

        if (value instanceof Buffer) {
          value = cbor.decode(value).toString('hex')
        }
  
        if (anchorsKeymap[val[0]] === 'chain') {
          value = chainKeymap[value]
        }
        acc[anchorsKeymap[val[0]]] = value
  
        return acc
      }, {})
    )
  }

  constructPathJSON(path) {
    const pathKeymap = _.invert(Keymap.path)
    return path.map(item => {
      return {
        [pathKeymap[item[0]]]: cbor.decode(item[1]).toString('hex')
      }
    })
  }

  decode() {
    const encoded = multibase.decode(this.base58)
    const map = cbor.decode(encoded)
    const json = this.constructRootJSON(map)

    return json
  }
}

module.exports = Decoder