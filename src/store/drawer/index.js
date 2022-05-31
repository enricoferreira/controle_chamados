import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    drawer: false,
    items_drawer: [
        {
            text: 'Dashboard',
            to: 'Dash',
            icon: 'mdi-chart-box-outline'
        },
        {
            text: 'Chamados',
            to: 'Chamados',
            icon: 'mdi-phone-log-outline'
        },
        {
            text: 'Atendimentos',
            to: 'Atendimentos',
            icon: 'mdi-phone-outline'
        },
    ],
  }),
  getters: {
    reverse: drawer => !drawer,
  },
  actions: {
    toggle() {
      this.drawer = !this.drawer
    },
  },
})
