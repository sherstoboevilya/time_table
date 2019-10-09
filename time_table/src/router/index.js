import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import FullTable from '../components/Full/Table'
import Table from '../components/today/Table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Table',
          component: Table
        },
        {
          path: '/Full',
          name: 'FullTable',
          component: FullTable
        }
      ]
    }
  ]
})
