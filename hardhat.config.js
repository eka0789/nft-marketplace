/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")


const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString();

// infuraId is optional if you are using Infura RPC
const infuraId = fs.readFileSync(".infuraid").toString();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
 mumbai: {
   url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
  //  url: "https://rpc-mumbai.maticvigil.com",
   accounts: [privateKey]
 }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}