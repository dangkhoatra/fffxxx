const config = {
  repeatCount: 10000,

  // delta gas
  increaseGas: 2,

  // deplay tome per transaction
  sleepTime: 1000,

  // Value Amount
  payPrice: "0",

  // Wallet private key
  privateKey: "",

  // The receiving address (can also be the contract address).
  // If it is empty, it will be sent to yourself.
  receiveAddress: "0xc6e865c213c89ca42a622c5572d19f00d84d7a16",

  // Inscription json data 
  tokenJson: 'data:,{"tick":"CFXs","max":"21,000,000","mint":"1"}',

  rpcUrl: "https://evm.confluxrpc.com",
  //rpcUrl: "https://cfx-espace.unifra.io/v1/36dcc0a612f8434fbd30b63a67dcac6f",
};

module.exports = config;
