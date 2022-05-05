<template>
<h1> Моя первая переменная в хранилище {{myFirstValue}} </h1>
  <button v-on:click="onBtnClick"> Commit to 10 </button>
  <input v-model="myVModel">
  <button @click="onBtnUpdate"> Update </button>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MyFirstValue',
  setup () {
    const store = useStore()

    return {
      myFirstValue: computed(() => store.getters.getMyFirstValue),
      onBtnClick: function () {
        store.commit('setMyFirstValue', 10)
      },
      onBtnUpdate: function () {
        store.dispatch('apiGetMyFirstValue')
      },
      myVModel: computed({
        get: function () {
          console.log('get')
          return store.getters.getMyFirstValue
        },
        set: function (data) {
          console.log('set')
          store.commit('setMyFirstValue', data)
        }
      })
    }
  }
})
</script>

<style scoped>

</style>
