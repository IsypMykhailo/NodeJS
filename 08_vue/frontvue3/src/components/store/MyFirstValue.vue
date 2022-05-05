<template>
<h1> Моя первая переменная в хранилище {{myFirstValue}} </h1>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MyFirstValue',
  setup () {
    const store = useStore()

    return {
      myFirstValue: computed(() => store.getters.getMyFirstValue)
      // myFirstValue: store.getters.getMyFirstValue
    }
  }
})
</script>

<style scoped>

</style>
