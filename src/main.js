import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery'
import 'popper.js'
import { createApp } from 'vue'

Vue.config.productionTip = false

createApp(App)
  .use(router)
  .mount('#app')