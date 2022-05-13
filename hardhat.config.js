require('@nomiclabs/hardhat-waffle')

const fs = require('fs') // File Service

const privateKey = process.env
console.log('My key', privateKey)
const projectId = 'b2d351e8f6b54a4daf84e1265fb2eb98'

// Polygon Network Configurations
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [],
    },
    mainet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [],
    },
  },
  solidity: '0.8.4',
}
