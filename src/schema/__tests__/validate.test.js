const { validate } = require('../index')
const validSchema = require('./valid.json')

describe('validate schema', () => {
  test('checks valid data against schema', () => {
    expect(validate(validSchema)).toBeTruthy()
  });

  describe('merkleRoot property', function () {
    it('fails when not specified', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20",
        "anchors": [
          "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
        ]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails when not of type string', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": ["3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781"],
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20",
        "anchors": [
          "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
        ]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails content length is longer than 64 characters', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781x",
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20",
        "anchors": [
          "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
        ]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails content length is shorter than 64 characters', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e78",
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20",
        "anchors": [
          "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
        ]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });
  });

  describe('targetHash property', function () {
    it('fails when not specified', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781",
        "anchors": [
          "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
        ]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails when not of type string', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781",
        "targetHash": ["c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20"],
        "anchors": [
          "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
        ]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails content length is longer than 64 characters', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781",
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20x",
        "anchors": [
          "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
        ]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails content length is shorter than 64 characters', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781",
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f2",
        "anchors": [
          "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
        ]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });
  });

  describe('anchors property', function () {
    it('fails when not specified', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781",
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20"
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails when the type of data is not an array', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781",
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20",
        "anchors": "blink:btc:testnet:582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3"
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails when the array content is not string', function () {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781",
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20",
        "anchors": [{
          "sourceId": "582733d7cef8035d87cecc9ebbe13b3a2f6cc52583fbcd2b9709f20a6b8b56b3",
          "type": "BTCOpReturn"
        }]
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    });

    it('fails when array length is 0', () => {
      const data = {
        "path": [
          { "0": "51b4e22ed024ec7f38dc68b0bf78c87eda525ab0896b75d2064bdb9fc60b2698" },
          { "1": "61c56cca660b2e616d0bd62775e728f50275ae44adf12d1bfb9b9c507a14766b" }
        ],
        "merkleRoot": "3c9ee831b8705f2fbe09f8b3a92247eed88cdc90418c024924be668fdc92e781",
        "targetHash": "c65c6184e3d5a945ddb5437e93ea312411fd33aa1def22b0746d6ecd4aa30f20",
        "anchors": []
      }
      const valid = validate(data)
      expect(valid).toBeFalsy()
    })
  })

})

