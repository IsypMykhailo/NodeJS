<template>
  <div class="form-row">
    <div v-if="carsError" class="alert alert-danger">
      error<span >{{carsError}}</span>
    </div>

    <div v-if="!isCarsLoading" class="form-group mb-3">
      <label>Cars model: </label>
      <v-select v-model="carsModel" :options="carsModels"></v-select>
    </div>

    <button class="btn btn-primary" :disabled="isCarsLoading" @click="getCars">search</button>
  </div>

  <div v-if="isCarsLoading" class="spinner-border" role="status"></div>

  <div style="width: 100vw" class="row">
    <div v-for="car in carsResult" :key="car.id" class="card w-25 m-1">
      <div class="card-body">
        <h5 class="card-title">{{car.make + ' ' + car.model}}</h5>
        <p class="card-text">{{car.type}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  components: {
    vSelect
  },
  name: 'CarsData',
  setup () {
    const store = useStore()
    return {
      carsResult: computed(() => store.getters.getCarsResult),
      isCarsLoading: computed(() => store.getters.getIsCarsLoading),
      carsError: computed(() => store.getters.getCarsError),
      carsModels: computed(() => store.getters.getCarsModels),
      carsModel: computed({
        get () {
          return store.getters.getCarsModel
        },
        set (data) {
          store.commit('setCarsModel', data)
        }
      }),
      getCars: () => { store.dispatch('apiGetCars') }
    }
  },
  mounted: () => {
    const store = useStore()
    store.dispatch('apiGetCarsModels')
  }
}
</script>

<style scoped>
</style>
