import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import login from '@/pages/login'
import index from '@/pages/index'

Vue.use(Router)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
