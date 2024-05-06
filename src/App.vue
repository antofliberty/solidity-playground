<template>
  <v-app>
    <v-main class="d-flex py-10 flex-column">
      <h1 class="text-center">Solidity Playground</h1>
<!--      <v-container class="text-center">-->
<!--        <v-btn flat size="large" color="transparent" :rounded="false">Home</v-btn>-->
<!--        <v-btn flat size="large" color="transparent" :rounded="false">About</v-btn>-->
<!--      </v-container>-->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useMainStore} from "./stores/main";

export default defineComponent({
  beforeMount() {
    const mainStore = useMainStore()
    mainStore.initApp()
  },
})

</script>
