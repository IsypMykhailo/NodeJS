<template>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Menu></Menu>
    <Translate></Translate>
</template>

<script>
    import Translate from '@/components/Translate'
    import Menu from '@/components/Menu'

export default {
  name: 'App',
  components: {
      Translate,
      Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
