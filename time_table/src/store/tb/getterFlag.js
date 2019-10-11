import {flag} from '../state'

const state = {
  flag
}

const getters = {
  getFlag: state => state.flag
}

const mutations = {
  changeFlag (state, val) {
    state.flag = val
  }
}

export default {
  state,
  getters,
  mutations
}
