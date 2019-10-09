import Vue from 'vue'
import Vuex from 'vuex'
import monday from './tb/monday'
import tuesday from './tb/tuesday'
import wednesday from './tb/wednesday'
import thursday from './tb/thursday'
import friday from './tb/friday'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday
  }
})
