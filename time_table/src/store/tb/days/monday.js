import {monday} from '../../state'

const state = {
  ...monday
}

const getters = {
  getValueMonday: state => state
}

export default {
  state,
  getters
}
