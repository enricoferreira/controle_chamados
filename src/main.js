import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";

loadFonts()

createApp(App).use(createPinia())
  .use(VueApexCharts)
  .use(router)
  .use(vuetify)
  .mount('#app')
