<template>
  <div class="hello">
    <content-table v-if="flag === 1"/>
    <fullTable v-if="flag === 2"/>
  </div>
</template>

<script>
import ContentTable from './contentTable'
import {mapGetters} from 'vuex'
import fullTable from './fullTable'

export default {
  name: 'Table',
  components: {ContentTable, fullTable},
  computed: {
    ...mapGetters({
      flag: 'getFlag'
    })
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
