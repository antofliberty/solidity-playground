import Web3 from 'web3';
import {ServiceMessage} from "../types";

export class Web3Service {
    web3: Web3 | null = null;

    constructor() {
        // this.initWeb3();
    }

    public async initWeb3(): Promise<true | ServiceMessage> {
        // Check for injected web3 (i.e., MetaMask).

        if ((window as any).ethereum) {
            // this.web3 = new Web3((window as any).ethereum);
            this.web3 = new Web3(`https://sepolia.infura.io/v3/${import.meta.env.VITE_INFURA_PROJECT_ID}`)

            try {
                // Request account access if needed
                await window.ethereum.request({ method: 'eth_requestAccounts' })
                return true
            } catch (error) {
                return new ServiceMessage({
                    code: 1,
                    message: "Access denied for web3.",
                    type: 'error'
                })
            }
        } else if ((window as any).web3) {
            // Legacy dapp browsers...
            this.web3 = new Web3((window as any).web3.currentProvider);
            return true; // Assume it is initialized properly
        } else {
            // Non-dapp browsers or no provider found.
            return new ServiceMessage({
                code: 2,
                message: 'Non-Ethereum browser detected. Consider trying MetaMask!',
                type: 'error'
            })
        }
    }

    public getWeb3(): Web3 | null {
        return this.web3;
    }
}

export const web3Service = new Web3Service();
