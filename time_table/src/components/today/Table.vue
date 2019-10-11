<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <content-table v-if="flag"/>
        <fullTable v-if="!flag"/>
      </div>
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
