import {thursday} from '../state'

const state = {
  ...thursday
}

const getters = {
  getValueThursday: state => state
}

export default {
  state,
  getters
}
