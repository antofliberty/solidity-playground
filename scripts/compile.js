const fs = require("fs").promises;
const solc = require("solc");
const path = require("node:path");

const CONTRACTS_PATH = '../src/contracts/'

async function main() {

    const args = process.argv.slice(2);
    const file = args[0];
    let contracts = []

    if (file) {
        contracts.push(file)
    } else {
        contracts = await fs.readdir(CONTRACTS_PATH)
    }

    for (const contract of contracts) {
        const className = contract.split('.')[0]
        // Load the contract source code
        const sourceCode = await fs.readFile(path.resolve(`${CONTRACTS_PATH}${className}.sol`), "utf8");
        // Compile the source code and retrieve the ABI and Byte code
        const { abi, bytecode } = compile(sourceCode, className);
        // Store the ABI and Bytecode into a JSON file
        const artifact = JSON.stringify({ abi, bytecode }, null, 2);
        await fs.writeFile(path.resolve(`${CONTRACTS_PATH}${className}.json`), artifact);
    }
}

function compile(sourceCode, contractName) {
    // Create the Solidity Compiler Standard Input and Output JSON
    const input = {
        language: "Solidity",
        sources: { main: { content: sourceCode } },
        settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } },
    };
    // Parse the compiler output to retrieve the ABI and Bytecode
    const output = solc.compile(JSON.stringify(input));

    const artifact = JSON.parse(output).contracts.main[contractName];

    return {
        abi: artifact.abi,
        bytecode: artifact.evm.bytecode.object,
    };
}

main()
