import {flag} from '../state'

const state = {
  flag
}

const getters = {
  getFlag: state => state
}

const mutations = {
  changeFlag (state) {
    state.flag = !state.flag
  }
}

export default {
  state,
  getters,
  mutations
}
