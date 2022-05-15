<template>
  <p> {{ item.name }}
    <button :value=item.index @click="delIndex"> - </button></p>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'PortfolioItem',
  props: {
    item: {}
  },
  setup () {
    const store = useStore()
    return {
      delIndex: function (el) {
        store.commit('setPortfolioDelIndex', el.target.value)
      }
    }
  }
}
</script>

<style scoped>

</style>
