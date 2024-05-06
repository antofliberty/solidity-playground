<template>
  <div>
    <h2>Simple Storage</h2>

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
import SimpleStorage from "../contracts/SimpleStorage.sol?raw"
import {simpleStorageABI} from "../contracts/abis";

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-solidity'

export default defineComponent({
  name: "Contract",
  data() {
    return {
      contracts: {
        storage: {
          source: SimpleStorage,
          abi: simpleStorageABI
        },
      }
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  computed: {
    currentContract() {
      return this.contracts[this.$route.params.id as string]
    }
  }
})

</script>
