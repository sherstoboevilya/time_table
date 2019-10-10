<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-xs-12">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Дисциплина</th>
              <th>Вид</th>
              <th>Препод</th>
              <th>Время</th>
              <th>Аудит</th>
            </tr>
            </thead>
            <content-table/>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTable from './contentTable'
export default {
  name: 'Table',
  components: {ContentTable}
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
