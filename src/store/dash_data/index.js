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
            v: 31,
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
    serie_10_customers: [{
      name: 'Chamado por clientes',
      data: [8, 10, 13, 43, 59]
    }],
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
    },
    top_10_customers: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["São joão", "Tok Stock", "Venancio", "Paguemenos", "DPSP"],
        
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: false,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          }
        }

      },
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
