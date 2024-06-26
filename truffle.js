const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",    
      port: 8545,          
      network_id: "*",     
    },
    bsctest: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscmain: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {
        optimizer: {
          enabled: true
        }
      }
    }
  }
}