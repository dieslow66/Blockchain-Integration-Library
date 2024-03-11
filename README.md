# Blockchain Integration Library

Blockchain Integration Library is a JavaScript package that provides basic functionalities to interact with a blockchain network. Currently, it supports Ethereum blockchain.

## Installation

You can install the Blockchain Integration Library package via npm:

```bash
npm install blockchain-integration
const BlockchainIntegration = require('blockchain-integration');

// Provider URL for connecting to an Ethereum node
const providerUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID';

// Ethereum contract ABI (example ABI)
const abi = [
    {
        "constant": false,
        "inputs": [],
        "name": "exampleFunction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Create a new instance of BlockchainIntegration
const blockchain = new BlockchainIntegration(providerUrl);

// Example: Sending transaction
blockchain.sendTransaction('YOUR_ADDRESS', 'RECIPIENT_ADDRESS', 0.1)
    .then(txHash => {
        console.log('Transaction sent successfully. Transaction hash:', txHash);
    })
    .catch(error => {
        console.error('Failed to send transaction:', error.message);
    });

// Example: Calling smart contract function
blockchain.callSmartContractFunction('CONTRACT_ADDRESS', abi, 'exampleFunction', [], 'YOUR_ADDRESS')
    .then(result => {
        console.log('Smart contract function called successfully. Result:', result);
    })
    .catch(error => {
        console.error('Failed to call smart contract function:', error.message);
    });
