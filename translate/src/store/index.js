import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import toasts from '@/store/toasts'
import translator from '@/store/modules/translator'

export default createStore({
  strict: true,
  // Тут лучше всего что бы было пусто
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    auth,
    toasts,
    translator
  }
})
