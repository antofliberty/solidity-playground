<template>
  <v-container class="flex-1-0">
    <ServiceMessageQueue></ServiceMessageQueue>
    <v-row class="h-100">
      <v-col cols="3">
        <div class="d-flex justify-space-between">
          <h2 class="mb-4">Wallet</h2>
          <v-chip v-if="web3Ready" color="success">Connected</v-chip>
          <v-chip v-else color="error">Web3 disabled</v-chip>
        </div>
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

        <v-card
            v-else
            title="Addresses"
            variant="tonal"
            color="surface-variant"
        >
          <v-card-text>
            <v-list :items="accounts"></v-list>
          </v-card-text>
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
              :disabled="!web3Ready"
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
import {useMainStore} from "@/stores/main";
import {mapActions, mapState, mapWritableState} from "pinia";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      accounts: [],
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
    ...mapActions(useMainStore, ['pushServiceMessage', 'initWeb3']),
    async connectWeb3() {
      await this.initWeb3()
    },
    async loadWallet() {
      this.accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    }
  },
  computed: {
    ...mapState(useMainStore, ['web3']),
    ...mapWritableState(useMainStore, ['web3Ready'])
  },
  watch: {
    async web3Ready(ready) {
      if (ready) {
        await this.loadWallet()
      }
    }
  },
  async beforeMount() {

  },
})
</script>


<style>
  .v-list-item-title {
    white-space: normal!important;
    hyphens: unset!important;
  }
</style>
