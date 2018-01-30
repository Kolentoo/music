// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-default.css'
import './assets/styles/core.css'
import store from '../src/vuex/store'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(MuseUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
