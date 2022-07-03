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

const chain = {
  btc: {
    id: 0,
    networks: {
      mainnet: 1,
      testnet: 3
    }
  },
  eth: {
    id: 1,
    networks: {
      mainnet: 1,
      ropsten: 3,
      rinkeby: 4,
      goerli: 5,
      sepolia: 11155111
    }
  },
  mtc: {
    id: 2,
    networks: {
      mainnet: 137,
      mumbai: 80001
    }
  }
}

module.exports = {
  root,
  path,
  chain
}