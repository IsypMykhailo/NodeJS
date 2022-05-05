import { useToast } from 'vue-toast-notification'
const toast = useToast()

export default {
  // namespaced: true,
  state: {
    myFirstValue: JSON.parse(localStorage.getItem('myFirstValue')) || 0
  },
  getters: {
    getMyFirstValue (state) {
      return state.myFirstValue
    }
  },
  mutations: {
    setMyFirstValue (state, data) {
      localStorage.setItem('myFirstValue', JSON.stringify(data))
      state.myFirstValue = data
    }
  },
  actions: {
    apiGetMyFirstValue ({ state, commit, dispatch }) {
      console.log('Get Data')
      commit('setMyFirstValue', 'Success')
      toast.success('Received Data', {
        position: 'top'
      })
    }
  }
}
