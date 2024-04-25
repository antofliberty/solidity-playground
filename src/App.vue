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
// import {useAppStore} from "./stores/app"

defineComponent({
  mounted() {
    // const appStore = useAppStore()
    // appStore.initWeb3()
  },
})

</script>
