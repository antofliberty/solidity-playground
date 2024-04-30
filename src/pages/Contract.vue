<template>
  <div>
    <h2>Simple Storage</h2>

    <h3>ABI (Application Binary Interface)</h3>

    <h3>Source code</h3>
    <pre>
      <code class="language-solidity" v-text="contracts[$route.params.id as string] as string"/>
    </pre>
  </div>
</template>


<script lang="ts">

import {defineComponent} from "vue";
import SimpleStorage from "../contracts/SimpleStorage.sol?raw"
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-solidity'

export default defineComponent({
  name: "Contract",
  data() {
    return {
      contracts: {
        storage: SimpleStorage,
      }
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  }
})

</script>
