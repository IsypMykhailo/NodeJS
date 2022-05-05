export default {
  namespaced: true,
  state: {
    myFirstValue: 0
  },
  getters: {
    getMyFirstValue ({ state }) {
      return state.myFirstValue
    }
  },
  mutations: {
    setMyFirstValue ({ state }, data) {
      state.myFirstValue = data
    }
  },
  actions: {
    apiGetMyFirstValue ({ state }, { commit }, { dispatch }, data) {
      // get from server
    }
  }
}
