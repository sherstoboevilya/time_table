<template>
  <div>
    <Header/>
    <Table/>
  </div>
</template>

<script>
import Header from './Header'
import Table from './Table'

export default {
  name: 'Main',
  components: {Table, Header}
}
</script>

<style scoped>

</style>
