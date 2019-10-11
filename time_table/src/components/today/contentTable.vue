<template>
  <tbody>
  <tr v-for="(subject, index) in today" :key="index" ref="myTr">
    <td v-for="(value, index) in subject" :key="index">{{ value }}</td>
  </tr>
  </tbody>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'contentTable',
  data () {
    return {
      today: null,
      date: null,
      time: null,
      HM: null,
      myInterval: null
    }
  },
  computed: {
    ...mapGetters({
      monday: 'getValueMonday',
      tuesday: 'getValueTuesday',
      wednesday: 'getValueWednesday',
      thursday: 'getValueThursday',
      friday: 'getValueFriday'
    })
  },
  methods: {
    getClass () {
      let step = 0
      for (let key in this.today) {
        this.time = this.today[key].time.split('-')
        this.HM = new Date().getHours() + '.' + new Date().getMinutes()
        if (this.HM > this.time[0] && this.HM < this.time[1]) {
          this.$refs.myTr[step].classList.add('success')
        } else {
          if (this.$refs.myTr[step].classList.contains('success')) {
            console.log(this.$refs.myTr[step])
            this.$refs.myTr[step].classList.remove('success')
          }
        }
        step += 1
      }
    },
    getToday () {
      this.date = new Date().getDay()
      switch (this.date) {
        case 1:
          this.today = this.monday
          break
        case 2:
          this.today = this.tuesday
          break
        case 3:
          this.today = this.wednesday
          break
        case 4:
          this.today = this.thursday
          break
        case 5:
          this.today = this.friday
          break
      }
    }
  },
  created () {
    this.getToday()
  },
  watch: {
    today () {
      this.getClass()
      this.myInterval = setInterval(() => {
        this.getClass()
      }, 1000)
    }
  },
  destroyed () {
    clearInterval(this.myInterval)
  }
}
</script>

<style scoped>

</style>
