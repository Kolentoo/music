import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: ''
  },
  mutations: {
    increment (state,data) {
      state.count = data
    }
  }
})

export default{
    store
}

