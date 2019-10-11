<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-xs-12">
          <table class="table table-bordered table-responsive">
            <thead>
            <tr>
              <th>Дисциплина</th>
              <th>Вид</th>
              <th>Препод</th>
              <th>Время</th>
              <th>Аудит</th>
            </tr>
            </thead>
            <tbody v-for="(day, key, index) in fullTable">
            <tr class="table-header">
              <td colspan="5">{{ nameDay[index] }}</td>
            </tr>
            <tr v-for="lession in day">
              <td v-for="subj in lession">{{ subj }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Table',
  data () {
    return {
      nameDay: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
    }
  },
  computed: {
    ...mapGetters({fullTable: 'getFullTable'})
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

  .table-header{
    text-align: center;
    background: aliceblue;
    font-size: 20px;
    font-weight: 600;
  }
</style>
