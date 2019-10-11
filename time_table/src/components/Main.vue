<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './Header'
import Table from './today/Table'

export default {
  name: 'Main',
  components: {Table, Header}
}
</script>

<style scoped>

</style>
