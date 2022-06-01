import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import VueToast from 'vue-toast-notification'

import 'vue-toast-notification/dist/theme-sugar.css'

createApp(App)
    .use(store)
    .use(router)
    .use(VueToast)
    .mount('#app')
