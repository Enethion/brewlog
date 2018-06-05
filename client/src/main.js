import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'vuetify/dist/vuetify.min.css'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

sync(store, router)

Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')