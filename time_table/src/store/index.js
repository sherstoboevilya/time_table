import Vue from 'vue'
import Vuex from 'vuex'
import monday from './tb/days/monday'
import tuesday from './tb/days/tuesday'
import wednesday from './tb/days/wednesday'
import thursday from './tb/days/thursday'
import friday from './tb/days/friday'
import full from './tb/full'
import getterFlag from './tb/getterFlag'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getterFlag,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    full
  }
})
