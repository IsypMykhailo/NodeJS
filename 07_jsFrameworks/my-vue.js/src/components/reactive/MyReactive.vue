<template>
<h1>MyReactive</h1>
  <p><span> User Name : </span> {{myName}} </p>
  <p><input v-model="myName"></p>
  <ul>
    <li v-for="p in product" v-bind:key="p.id"> {{p.name}}</li>
  </ul>
</template>

<script>
export default {
  name: "MyReactive",
  mounted: () => {
    console.log("Mounted");
  },
  data(){
    return{
      myName: "Vasya",
      product: [
        {id: 1, name: "Notebook"},
        {id: 2, name: "Monitor"},
      ]
    }
  }
}
</script>

<style scoped>

</style>