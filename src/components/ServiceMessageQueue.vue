<template>
  <div class="position-absolute" style="margin-left: 20px;top:20px;right:20px;">
    <transition-group name="list" tag="v-card">
      <v-card
          :rounded="false"
          v-for="message in serviceMessages"
          :key="message.id"
          class="text-center py-3 px-5 mb-3"
      >
        <div class="d-flex">
          <div class="d-flex align-center">
            <span class="text-red font-weight-bold">Error:</span>
            <div class="ml-1">{{ message.message }}</div>
          </div>
          <v-btn icon @click="removeServiceMessage(message.id)" size="small" flat class="ml-3">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card>
    </transition-group>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {mapActions, mapState} from "pinia";
import {useMainStore} from "@/stores/main";

export default defineComponent({
  name: "ServiceMessageQueue",
  data() {
    return {

    }
  },
  computed: {
    ...mapState(useMainStore, ['serviceMessages'])
  },
  methods: {
    ...mapActions(useMainStore, ['removeServiceMessage'])
  }

})
</script>


<style lang="scss" scoped>

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

</style>
