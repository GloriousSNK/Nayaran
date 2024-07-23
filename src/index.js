const {Blockchain, Transactions} = require('./blockchain')

const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('7109a7790f38c0b98cdc63bbf3221879cb2eddbde31445a8cc003073d3c83435') 
const myWalletAddress = myKey.getPublic('hex')

let snkCoin = new Blockchain();

const tx1 = new Transactions(myWalletAddress,'Public Key',-500)
tx1.signTransaction(myKey)
snkCoin.addTransaction(tx1)

console.log('Starting the miner');
snkCoin.minePendingTransactions(myWalletAddress);

console.log("Balance of Sriman:", snkCoin.getBalanceOfAddress(myWalletAddress));

