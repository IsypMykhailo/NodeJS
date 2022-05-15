export default {
  state: {
    novaPoshtaError: null,
    isNovaPoshtaLoading: false,
    novaPoshtaAreas: [],
    novaPoshtaCities: [],
    novaPoshtaWarehouses: [],
    novaPoshtaArea: '',
    novaPoshtaCity: ''
  },
  getters: {
    getNovaPoshtaError (state) {
      return state.novaPoshtaError
    },
    getIsNovaPoshtaLoading (state) {
      return state.isNovaPoshtaLoading
    },
    getNovaPoshtaAreas (state) {
      return state.novaPoshtaAreas
    },
    getNovaPoshtaCities (state) {
      return state.novaPoshtaSettlements
    },
    getNovaPoshtaWarehouses (state) {
      return state.novaPoshtaWarehouses
    },
    getNovaPoshtaArea (state) {
      return state.novaPoshtaArea
    },
    getNovaPoshtaCity (state) {
      return state.novaPoshtaCity
    }
  },
  mutations: {
    setNovaPoshtaError (state, data) {
      state.novaPoshtaError = data
    },
    setIsNovaPoshtaLoading (state, data) {
      state.isNovaPoshtaLoading = data
    },
    setNovaPoshtaAreas (state, data) {
      state.novaPoshtaAreas = data
    },
    setNovaPoshtaCities (state, data) {
      state.novaPoshtaSettlements = data
    },
    setNovaPoshtaWarehouses (state, data) {
      state.novaPoshtaWarehouses = data
    },
    setNovaPoshtaArea (state, data) {
      state.novaPoshtaArea = data
    },
    setNovaPoshtaCity (state, data) {
      state.novaPoshtaCity = data
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    apiGetAreas ({ state, commit, dispatch }) {
      if (state.novaPoshtaAreas.length !== 0) { return }

      commit('setNovaPoshtaError', null)

      dispatch('toastInfo', 'Loading areas...')
      commit('setIsNovaPoshtaLoading', true)

      dispatch('apiGetAreasFromServer')
    },

    // eslint-disable-next-line no-unused-vars
    apiGetAreasFromServer ({ state, commit, dispatch }) {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          apiKey: '1402614575023cc212fa138c4b057594',
          modelName: 'Address',
          calledMethod: 'getAreas',
          methodProperties: { }
        })
      }

      fetch('https://api.novaposhta.ua/v2.0/json/', options)
        .then(response => response.json())
        .then(areas => {
          console.log(areas)
          commit('setNovaPoshtaAreas', areas.data)
          dispatch('toastSuccess', 'Loaded successfully')
          commit('setIsNovaPoshtaLoading', false)
        })
        .catch(err => dispatch('logError', err))
    },

    // eslint-disable-next-line no-unused-vars
    apiGetCities ({ state, commit, dispatch }) {
      if (state.novaPoshtaArea == null) { return }

      commit('setNovaPoshtaError', null)

      dispatch('toastInfo', 'Loading cities...')
      commit('setIsNovaPoshtaLoading', true)

      dispatch('apiGetCitiesFromServer')
    },

    // eslint-disable-next-line no-unused-vars
    apiGetCitiesFromServer ({ state, commit, dispatch }) {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          apiKey: '1402614575023cc212fa138c4b057594',
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: {
            AreaRef: state.novaPoshtaArea.Ref
          }
        })
      }

      fetch('https://api.novaposhta.ua/v2.0/json/', options)
        .then(response => response.json())
        .then(cities => {
          console.log(cities)
          commit('setNovaPoshtaCities', cities.data)
          dispatch('toastSuccess', 'Loaded successfully')
          commit('setIsNovaPoshtaLoading', false)
        })
        .catch(err => dispatch('logError', err))
    },

    // eslint-disable-next-line no-unused-vars
    apiGetWarehouses ({ state, commit, dispatch }) {
      if (state.novaPoshtaCity == null) { return }

      commit('setNovaPoshtaError', null)

      dispatch('toastInfo', 'Loading warehouses...')
      commit('setIsNovaPoshtaLoading', true)

      dispatch('apiGetWarehousesFromServer')
    },

    // eslint-disable-next-line no-unused-vars
    apiGetWarehousesFromServer ({ state, commit, dispatch }) {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          apiKey: '1402614575023cc212fa138c4b057594',
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityRef: state.novaPoshtaCity.Ref
          }
        })
      }

      fetch('https://api.novaposhta.ua/v2.0/json/', options)
        .then(response => response.json())
        .then(warehouses => {
          console.log(warehouses)
          commit('setNovaPoshtaWarehouses', warehouses.data)
          dispatch('toastSuccess', 'Loaded successfully')
          commit('setIsNovaPoshtaLoading', false)
        })
        .catch(err => dispatch('logError', err))
    }
  }
}
