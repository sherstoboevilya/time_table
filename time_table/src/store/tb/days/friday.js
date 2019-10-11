import {friday} from '../../state'

const state = {
  ...friday
}

const getters = {
  getValueFriday: state => state
}

export default {
  state,
  getters
}
