<template>
  <h1> Все портфолио </h1>
  <ul>
    <!--    <li v-for='item in items' :key="item.id" > {{item.name}}</li>-->
    <PortfolioItem
      v-for='item in items'
      :key="item.id"
      :item='item'></PortfolioItem>
  </ul>
  <input v-model="newElement">
  <button @click="push"> + </button>
  <button @click="pop"> pop </button>
</template>

<script>
import PortfolioItem from '@/components/portfolio/PortfolioItem'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import generateUUID from '@/helpers/guid'
export default {
  name: 'PortfolioList',
  components: { PortfolioItem },
  setup () {
    const strPush = ref('new Element')
    const strFilter = ref('')
    const store = useStore()
    store.dispatch('apiGetPortfolioItems')
    return {
      items: computed(() => store.getters.portfolioItem),
      strFilter: strFilter,
      newElement: strPush,
      push: function () {
        store.commit('setPortfolioPush',
          { name: strPush.value, id: generateUUID() }
        )
      },
      pop: function () {
        store.commit('getPortfolioPop')
        const el = store.getters.getPortfolioPop
        console.log(el)
      }
    }
  }
}
</script>

<style scoped>
</style>
