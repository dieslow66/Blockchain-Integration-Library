// blockchainIntegration.js

const Web3 = require('web3');

class BlockchainIntegration {
    constructor(providerUrl) {
        this.web3 = new Web3(providerUrl);
    }

    async sendTransaction(from, to, value) {
        try {
            const tx = await this.web3.eth.sendTransaction({
                from: from,
                to: to,
                value: value
            });
            return tx.transactionHash;
        } catch (error) {
            throw new Error(`Failed to send transaction: ${error.message}`);
        }
    }

    async callSmartContractFunction(contractAddress, abi, functionName, params, from) {
        try {
            const contract = new this.web3.eth.Contract(abi, contractAddress);
            const result = await contract.methods[functionName](...params).call({ from: from });
            return result;
        } catch (error) {
            throw new Error(`Failed to call smart contract function: ${error.message}`);
        }
    }
}

module.exports = BlockchainIntegration;
