require('@nomiclabs/hardhat-waffle')

const fs = require('fs') // File Service

const privateKey = process.env
// console.log('My key', privateKey)
const projectId = 'b2d351e8f6b54a4daf84e1265fb2eb98'

// Polygon Network Configurations
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://rpc-mumbai.matic.today`,
      accounts: [
        'fc4d76cdf3720818a6b966b5356fce24f8b729a32b101d59003046a33c7a9c52',
      ],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [
        'fc4d76cdf3720818a6b966b5356fce24f8b729a32b101d59003046a33c7a9c52',
      ],
    },
  },
  solidity: '0.8.4',
}
