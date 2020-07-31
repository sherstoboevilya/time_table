import {wednesday} from '../../state'

const state = {
  ...wednesday
}

const getters = {
  getValueWednesday: state => state
}

export default {
  state,
  getters
}
