export const simpleStorageABI = [
    {
        "inputs": [],
        "name": "readValue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_newValue",
                "type": "uint256"
            }
        ],
        "name": "storeValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
