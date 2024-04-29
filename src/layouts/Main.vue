<template>
  <v-container class="flex-1-0">
    <ServiceMessageQueue></ServiceMessageQueue>
    <v-row class="h-100">
      <v-col cols="3">
        <h2 class="mb-4">Wallet</h2>
        <v-card
            v-if="!web3Ready"
            title="Connect"
            variant="tonal"
            color="surface-variant"
            link
            text="Connect to MetaMask"
            @click="connectWeb3"
        >
        </v-card>

        <h2 class="my-4">Contracts</h2>
        <div class="d-flex flex-column ga-5">
          <v-card
              :title="contract.title"
              :subtitle="contract.description"
              v-for="(contract, index) in contracts"
              :key="index"
              variant="tonal"
              color="surface-variant"
              link
              :to="{ name: 'Contract', params: { id: contract.id } }"
              disabled
          ></v-card>
        </div>
      </v-col>
      <v-col cols="9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useMainStore} from "../stores/main";
import {mapActions, mapState, mapWritableState} from "pinia";



export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      contracts: [
        {
          id: 'storage',
          title: 'Storage',
          description: 'Simple storage',
        }
      ],
    }
  },
  methods: {
    ...mapActions(useMainStore, ['pushServiceMessage']),
    async connectWeb3() {
      const initWeb3 = await this.$web3Service.initWeb3()

      if (initWeb3 !== true) {
        this.pushServiceMessage(initWeb3)
        return
      }

      this.web3Ready = true

      const web3 = this.$web3Service.getWeb3()
      if (web3 === true) {
        const accounts = await web3.eth.getAccounts()
        console.log(accounts)
        // this.currentAccount = accounts[0];
      } else {
        //
      }
    }
  },
  computed: {
    ...mapState(useMainStore, ['errors']),
    ...mapWritableState(useMainStore, ['web3Ready'])
  },
})
</script>
