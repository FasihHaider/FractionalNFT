const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "egg dust custom conduct example miracle disease person aunt tone group royal";

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
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/3dfb5f4a4b564ee893955cd379a3e449`),
      network_id: 42,
      gas: 4000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/3dfb5f4a4b564ee893955cd379a3e449`),
      network_id: 4,
      gas: 4000000
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/3dfb5f4a4b564ee893955cd379a3e449`),
      network_id: 3,
      gas: 4000000
    },
    ethereum: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/3dfb5f4a4b564ee893955cd379a3e449`),
      network_id: 1,
      gas: 4000000
    },
    ftmtest: {
      provider:() => new HDWalletProvider(mnemonic, "https://rpc.testnet.fantom.network/"),
      network_id: 0xfa2,
      timeoutBlocks : 20000
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