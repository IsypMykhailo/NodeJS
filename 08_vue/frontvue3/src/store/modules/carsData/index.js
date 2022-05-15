export default {
  state: {
    carsModel: '',
    carsModels: [],
    carsError: null,
    carsResult: [],
    isCarsLoading: false
  },
  getters: {
    getCarsModel (state) {
      return state.carsModel
    },
    getCarsModels (state) {
      return state.carsModels
    },
    getCarsError (state) {
      return state.carsError
    },
    getCarsResult (state) {
      return state.carsResult
    },
    getIsCarsLoading (state) {
      return state.isCarsLoading
    }
  },
  mutations: {
    setCarsModel (state, data) {
      state.carsModel = data
    },
    setCarsModels (state, data) {
      state.carsModels = data
    },
    setCarsResult (state, data) {
      state.carsResult = data
    },
    setIsCarsLoading (state, data) {
      state.isCarsLoading = data
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    apiGetCars ({ state, commit, dispatch }) {
      if (state.carsModel == null || state.carsModel.match(/^ *$/) !== null) {
        state.carsError = 'Error. Search query is empty'
      } else {
        state.carsError = null

        dispatch('toastInfo', 'Loading cars...')
        commit('setIsCarsLoading', true)

        dispatch('apiGetCarsFromServer', cars => {
          commit('setCarsResult', cars)
          dispatch('toastInfo', 'Loaded successfully')
          commit('setIsCarsLoading', false)
        })
      }
    },

    // eslint-disable-next-line no-unused-vars
    apiGetCarsFromServer ({ state, commit, dispatch }, callback) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
          'X-RapidAPI-Key': '5807e7cbbamsh7a3863ef7020f5dp174a6bjsn0c027f2337f4'
        }
      }

      fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0&make=' + state.carsModel, options)
        .then(response => response.json())
        .then(cars => {
          callback(cars)
        })
        .catch(err => dispatch('logError', err))
    },

    // eslint-disable-next-line no-unused-vars
    apiGetCarsModels ({ state, commit, dispatch }) {
      dispatch('toastInfo', 'Loading models...')
      commit('setIsCarsLoading', true)

      dispatch('apiGetCarsModelsFromServer', models => {
        commit('setCarsModels', models)
        dispatch('toastInfo', 'Loaded successfully')
        commit('setIsCarsLoading', false)
      })
    },

    // eslint-disable-next-line no-unused-vars
    apiGetCarsModelsFromServer ({ state, commit, dispatch }, callback) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
          'X-RapidAPI-Key': '5807e7cbbamsh7a3863ef7020f5dp174a6bjsn0c027f2337f4'
        }
      }

      fetch('https://car-data.p.rapidapi.com/cars/makes', options)
        .then(response => response.json())
        .then(models => {
          callback(models)
        })
        .catch(err => dispatch('logError', err))
    }
  }
}
