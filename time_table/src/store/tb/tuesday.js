import {tuesday} from '../state'

const state = {
  ...tuesday
}

const getters = {
  getValueTuesday: state => state
}

export default {
  state,
  getters
}
