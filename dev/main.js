import Vue from 'vue'
import router from './routers'
import App from './app'
Vue.component('App', App)

Vue.config.errorHandler = function (err, vm, info) {
  let dom = document.querySelector('#error')
  dom.innerHTML = `<p>${err}</p><p>${vm}</p><p>${info}</p>`
  dom.style.display = 'block'
}

let app = new Vue({
  el: '#app',
  router,
  template: '<App/>'
})
