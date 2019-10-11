import {monday, tuesday, wednesday, thursday, friday} from '../state'

const state = {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday
}

const getters = {
  getFullTable: state => state
}

export default {
  state,
  getters
}
