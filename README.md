# LDS Merkle Proof 2019
This package contains the set of tools for LDS Merkle Proof 2019.

- Encoding proofValue.
- Decoding proofValue.

## Installation

To install run:
```
npm i --save @vaultie/lds-merkle-proof-2019
```

## Encoding proofValue
To encode JSON proofValue:

```
const { Encoder } = require('@vaultie/lds-merkle-proof-2019')
const encoder = new Encoder(proofValueJSON)

encoder.encode() // Buffer of Base58 encoded data
encoder.encode().toString() // Base58 string

```

## Decoding proofValue
To decode base58 proofValue:

```
const { Decoder } = require('@vaultie/lds-merkle-proof-2019')
const decoder = new Decoder(proofValueBase58)

decoder.decode() // JSON object with proofValue
```