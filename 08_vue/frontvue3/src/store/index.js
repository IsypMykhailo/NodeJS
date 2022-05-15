import { createStore } from 'vuex'
import myFirstValue from '@/store/modules/myFirstValue'
import toasts from '@/store/toasts'
import logs from '@/store/logs'
import songLyrics from '@/store/modules/songLyrics'
import myArray from '@/store/modules/myArray'
import portfolio from '@/store/modules/portfolio'
import auth from '@/store/modules/auth'
import carsData from '@/store/modules/carsData'
import novaPoshta from '@/store/modules/novaPoshta'

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
    myFirstValue,
    myArray,
    songLyrics,
    toasts,
    logs,
    auth,
    portfolio,
    carsData,
    novaPoshta
  }
})
