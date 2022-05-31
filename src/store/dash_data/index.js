import { defineStore } from 'pinia'

export const useDataChartStore = defineStore('data_chart', {
  state: () => ({
    kpis: [
        {
            nome: 'Chamados hoje',
            v: 24,
        },
        {
            nome: 'Chamados ontem',
            v: 33,
        },
        {
            nome: 'Média chamados',
            v: 43,
        }
    ],
    serie_7_dias: [
        {
            name: 'Chamados',
            data: [30, 40, 45, 50, 49, 60, 70]
        }
    ],
    week_options: {
        chart: {
          id: 'options',
          toolbar: {
              show: false
          },
        },
        grid:{
            show: false
        },
        yaxis: {
            show: false
        },
        colors: ['#393939'],
        xaxis: {
          type: 'datetime',
          labels:{
            format: 'ddd'
          },
          categories: ['2011-01-01','2011-01-02','2011-01-03','2011-01-04','2011-01-05','2011-01-06','2011-01-07',]
        }
      }

  }),
  getters: {
    // reverse: drawer => !drawer,
  },
  actions: {
    // toggle() {
    //   this.drawer = !this.drawer
    // },
  },
})
