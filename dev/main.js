import Vue from 'vue'
import router from './routers'
import App from './app'
Vue.component('App', App)

Vue.config.errorHandler = function (err, vm, info) {
  showError(err, JSON.stringify(vm), info)
}

window.addEventListener('error', (message, source, lineno, colno, error) => {
  showError(message, `source: ${source}, lineno: ${lineno}, colno: ${colno}`, error)
})

function showError () {
  let dom = document.querySelector('#error')
  let logs = []
  for (let i = 0; i < arguments.length; i++) {
    logs.push(`<p>${arguments[i]}</p>`)
  }
  logs.push('---------------------------')
  dom.innerHTML += logs.join() + 
  dom.style.display = 'block'
}

let app = new Vue({
  el: '#app',
  router,
  template: '<App/>'
})
