import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/dashboard/Dashboard'
import ContasPesquisa from '@/pages/contas/ContasPesquisa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/contas',
      name: 'ContasPesquisa',
      component: ContasPesquisa
    },
  ]
})
