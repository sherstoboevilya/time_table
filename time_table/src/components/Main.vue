<template>
  <div class="container">
    <div class="row">
        <mySelect/>
      </div>
      <div class="row">
        <router-view/>
      </div>
    </div>
<!--    <Header/>-->
</template>

<script>
import Header from './Header'
import Table from './today/Table'
import mySelect from './mySelect'

export default {
  name: 'Main',
  components: {mySelect, Table, Header}
}
</script>

<style scoped>

</style>
