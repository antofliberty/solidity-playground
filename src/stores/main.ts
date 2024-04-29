// Utilities
import { defineStore } from 'pinia'
import {ServiceMessage} from "../types";
// import {web3Service} from "../services/web3-service";

interface IMainState {
  serviceMessages: ServiceMessage[],
  web3Ready: boolean
}

export const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    // web3: null
    serviceMessages: [],
    web3Ready: false
  }),
  actions: {
    // initWeb3() {
    //   if (web3Service.initWeb3()) {
    //     this.web3 = web3Service.getWeb3()
    //   }
    // }
    pushServiceMessage(message: ServiceMessage): void {
      this.serviceMessages.push(message)
    },
    removeServiceMessage(id: string): void {
      const index = this.serviceMessages.findIndex((item: ServiceMessage) => item.id === id)
      this.serviceMessages.splice(index, 1)
    },
  }
})
