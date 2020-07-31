<template>
  <div>
    <div class="col-md-12 col-xs-12 col-sm-12">
      <multiselect
        v-model="value"
        track-by="code"
        label="value"
        :options="options"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Выберите расписание"
        @input="localChangeFlag"/>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'mySelect',
  data () {
    return {
      value: '',
      options: [
        {
          value: 'Сегодня',
          code: 1
        },
        {
          value: 'Общее',
          code: 2
        }
      ]
    }
  },

  methods: {
    ...mapMutations(['changeFlag']),
    localChangeFlag () {
      console.log(this.value)
      if (this.value !== null) {
        this.changeFlag(this.value.code)
      } else {
        this.changeFlag(1)
      }
    }
  }
}
</script>

<style scoped>

</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
