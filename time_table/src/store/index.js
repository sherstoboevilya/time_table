import Vue from 'vue'
import Vuex from 'vuex'
// import {a} from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 'asd'
  },
  getters: {
    getA: state => state.a
  }
})
