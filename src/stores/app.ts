// Utilities
import { defineStore } from 'pinia'
// import {web3Service} from "../services/web3-service";

export const useAppStore = defineStore('app', {
  state: () => ({
    // web3: null
    errors: []
  }),
  actions: {
    // initWeb3() {
    //   if (web3Service.initWeb3()) {
    //     this.web3 = web3Service.getWeb3()
    //   }
    // }
    pushErrorMessage(message: string) {
      this.errors.push(message)
    }
  }
})
