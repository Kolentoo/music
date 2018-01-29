import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import login from '@/pages/login'
import music from '@/pages/music'

Vue.use(Router)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
