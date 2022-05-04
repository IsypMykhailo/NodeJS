<template>
  <div class="h2 mb-0">
    <b-progress icon='arrow-up'></b-progress>
    <b-progress icon='exclamation-triangle'></b-progress>
  </div>
  <div class="h2 mb-0">
    <b-button icon='arrow-up'></b-button>
    <b-button icon='exclamation-triangle'></b-button>
  </div>
</template>

<script>
import { BButton, BProgress } from 'bootstrap-vue-3'
export default {
  components: {
    BButton,
    BProgress
  },
  name: 'BootStrap'
}
</script>

<style scoped>

</style>
