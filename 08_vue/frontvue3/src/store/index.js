import { createStore } from 'vuex'
import myFirstValue from '@/store/modules/myFirstValue'

export default createStore({
  strict: true,
  /* state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }, */
  modules: {
    myFirstValue
  }
})
