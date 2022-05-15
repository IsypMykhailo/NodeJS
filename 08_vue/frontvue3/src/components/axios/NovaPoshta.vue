<template>
  <div class="form-row">
    <div v-if="novaPoshtaError" class="alert alert-danger">
      <span>Error: {{novaPoshtaError}}</span>
    </div>

    <div v-if="!isNovaPoshtaLoading" class="form-group mb-3">
      <span>
        <label>Areas: </label>
        <v-select v-model="novaPoshtaArea" :options="novaPoshtaAreas" label="Description"></v-select>
        <button class="btn btn-primary" :disabled="isNovaPoshtaLoading" @click="getAreas">load</button>
        <br/>
      </span>

      <span>
        <label>Cities: </label>
        <v-select v-model="novaPoshtaCity" :options="novaPoshtaCities" label="Description"></v-select>
        <button class="btn btn-primary" :disabled="isNovaPoshtaLoading" @click="getCities">load</button>
        <br/>
      </span>

      <span>
        <label>Warehouses: </label>
        <v-select :options="novaPoshtaWarehouses" label="Description"></v-select>
        <button class="btn btn-primary" :disabled="isNovaPoshtaLoading" @click="getWarehouses">load</button>
      </span>
    </div>

  </div>

  <div v-if="isNovaPoshtaLoading" class="spinner-border" role="status"></div>
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
  name: 'NovaPoshta',
  setup () {
    const store = useStore()
    return {
      novaPoshtaAreas: computed(() => store.getters.getNovaPoshtaAreas),
      novaPoshtaCities: computed(() => store.getters.getNovaPoshtaCities),
      novaPoshtaWarehouses: computed(() => store.getters.getNovaPoshtaWarehouses),
      isNovaPoshtaLoading: computed(() => store.getters.getIsNovaPoshtaLoading),
      novaPoshtaError: computed(() => store.getters.getNovaPoshtaError),
      novaPoshtaArea: computed({
        get () {
          return store.getters.getNovaPoshtaArea
        },
        set (data) {
          store.commit('setNovaPoshtaArea', data)
        }
      }),
      novaPoshtaCity: computed({
        get () {
          return store.getters.getNovaPoshtaCity
        },
        set (data) {
          store.commit('setNovaPoshtaCity', data)
        }
      }),
      getAreas () {
        store.dispatch('apiGetAreas')
      },
      getCities () {
        store.dispatch('apiGetCities')
      },
      getWarehouses () {
        store.dispatch('apiGetWarehouses')
      }
    }
  }
}
</script>

<style scoped>
</style>
