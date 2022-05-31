import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dash',
    component: () => import(/* webpackChunkName: "dash" */ '../views/DashView.vue')
  },
  {
    path: '/atendimentos',
    name: 'Atendimentos',
    component: function () {
      return import(/* webpackChunkName: "atendimento" */ '../views/AtendimentoView.vue')
    }
  },
  {
    path: '/chamados',
    name: 'Chamados',
    component: function () {
      return import(/* webpackChunkName: "chamados" */ '../views/ChamadosHistoricoView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
