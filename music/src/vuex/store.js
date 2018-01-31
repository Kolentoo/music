import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: '',
    mvid:''
  },
  mutations: {
    increment (state,data) {
      state.count = data
      state.mvid = data
    }
  }
})

export default{
    store
}

