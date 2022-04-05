const { Blockchain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec

class BlockchainService {

  constructor() {
    this.blockchainInstance = new Blockchain()
    this.walletKeys = []
    this.generateWalletKeys()
  }

  getBlocks() {
    return this.blockchainInstance.chain
  }

  getDifficulty() {
    return this.blockchainInstance.difficulty
  }

  getReward() {
    return this.blockchainInstance.miningReward
  }

  generateWalletKeys() {
    const ec = new EC('secp256k1')
    const key = ec.genKeyPair()

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    })
  }

  addTransaction(fromAddress, toAddress, amount) {
    const timestamp = Date.now()
    const tx1 = new Transaction(fromAddress, toAddress, amount, timestamp)
    tx1.signTransaction(this.walletKeys[0].keyObj)
    this.blockchainInstance.addTransaction(tx1)
  }

  startMining() {
    this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey)
  }


  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions
  }

  updateSettings(difficulty, reward) {
    this.blockchainInstance.updateSettings(difficulty, reward)
  }
}

export default new BlockchainService()


// const myKey = ec.keyFromPrivate('5a1a30a23319347ffe4628d0a31e807905a14122b4c74a0adc7c1740c1ac4209')
// const myWalletAddress = myKey.getPublic('hex')

// let dogCoin = new Blockchain()

// const tx1 = new Transaction(myWalletAddress, 'wallet2', 10)
// tx1.signTransaction(myKey)
// dogCoin.addTransaction(tx1)

// console.log('Starting the miner...')
// dogCoin.minePendingTransactions(myWalletAddress)

// console.log('Balance of myAddress is ', dogCoin.getBalanceOfAddress(myWalletAddress))