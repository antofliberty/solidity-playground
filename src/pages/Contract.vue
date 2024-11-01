<template>
  <div>
    <h2>Simple Storage</h2>

    <v-btn prepend-icon="mdi-play" color="green" class="my-5" @click="execute">
      Execute
    </v-btn>

    <h3>ABI (Application Binary Interface)</h3>
    <div>
      {{  }}
    </div>

    <h3>Source code</h3>
    <pre>
      <code class="language-solidity" v-text="currentContract.source as string"/>
    </pre>
  </div>
</template>


<script lang="ts">

import {defineComponent} from "vue";
import SimpleStorage from "@/contracts/SimpleStorage.sol?raw"
// import {simpleStorageABI} from "../../abis";

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-solidity'
import {mapState} from "pinia";
import {useMainStore} from "@/stores/main";

export default defineComponent({
  name: "Contract",
  data() {
    return {
      contracts: {
        storage: {
          source: SimpleStorage,
          // abi: simpleStorageABI
        },
      }
    }
  },
  methods: {
    async execute() {
      let contract = new this.web3.eth.Contract(this.contracts.storage.abi,'0xdAC17F958D2ee523a2206206994597C13D831ec7');
      let addr =  await window.ethereum.request({ method: 'eth_requestAccounts' })
      console.log(addr)
      contract.methods.storeValue(1).send({from: addr[0]}).then(console.log);
      contract.methods.readValue().call().then(console.log);
    },
  },
  computed: {
    ...mapState(useMainStore, ['web3']),
    currentContract() {
      return this.contracts[this.$route.params.id as string]
    }
  },
  mounted() {
    Prism.highlightAll()
  },
})

</script>
