const root = {
  'merkleRoot': 0,
  'targetHash': 1,
  'anchors': 2,
  'path': 3
}

const path = {
  'left': 0,
  'right': 1
}

const anchors = {
  'txHash': 0,
  'chain': 1,
  'chainId': 2
}

const chain = {
  'Bitcoin': 0,
  'Ethereum': 1
}

module.exports = {
  root,
  path,
  anchors,
  chain
}