import Vue from 'vue'
import router from './routers'
import App from './app'
Vue.component('App', App)

let app = new Vue({
  el: '#app',
  router,
  template: '<App/>'
})
