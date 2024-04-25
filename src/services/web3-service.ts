import Web3 from 'web3';

type ServiceMessage = {
    code: number,
    message: string,
    details?: object
}

class Web3Service {
    web3: Web3 | null = null;

    constructor() {
        // this.initWeb3();
    }

    public initWeb3(): true | ServiceMessage {
        // Check for injected web3 (i.e., MetaMask).
        if ((window as any).ethereum) {
            this.web3 = new Web3((window as any).ethereum);
            try {
                // Request account access if needed
                (window as any).ethereum.enable().then(() => {
                    return true
                });
            } catch (error) {
                return {
                    code: 1,
                    message: "Access denied for web3."
                }
            }
        } else if ((window as any).web3) {
            // Legacy dapp browsers...
            this.web3 = new Web3((window as any).web3.currentProvider);
        } else {
            // Non-dapp browsers or no provider found.
            return {
                code: 2,
                message: 'Non-Ethereum browser detected. Consider trying MetaMask!'
            }
        }
    }

    public getWeb3(): Web3 | null {
        return this.web3;
    }
}

export const web3Service = new Web3Service();
