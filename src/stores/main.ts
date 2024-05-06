// Utilities
import { defineStore } from 'pinia'
import {ServiceMessage} from "../types";
import {web3Service, Web3Service} from '../services/web3-service'

interface IMainState {
  serviceMessages: ServiceMessage[],
  web3Ready: boolean,
  web3Service: Web3Service
}

export const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    // web3: null
    serviceMessages: [],
    web3Ready: false,
    web3Service
  }),
  actions: {
    async initApp(): Promise<void> {
      await this.initWeb3()
    },
    async initWeb3(): Promise<void> {
      const web3ConnectedBefore = localStorage.getItem('web3-connected-before')
      if (web3ConnectedBefore !== null) {
        const initWeb3: ServiceMessage | true = await this.web3Service.initWeb3()
        if (initWeb3 !== true) {
          this.pushServiceMessage(initWeb3)
        } else {
          this.web3Ready = true
        }
      }
    },
    pushServiceMessage(message: ServiceMessage): void {
      this.serviceMessages.push(message)
    },
    removeServiceMessage(id: string): void {
      const index = this.serviceMessages.findIndex((item: ServiceMessage) => item.id === id)
      this.serviceMessages.splice(index, 1)
    },
  }
})
