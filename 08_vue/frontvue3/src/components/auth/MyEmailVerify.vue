<template>
  <h1>Проверка валдиности мыла</h1>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'MyEmailVerify',
  setup () {
    const route = useRoute()
    console.log(route.query)
  }
}
</script>
<style scoped>

</style>
