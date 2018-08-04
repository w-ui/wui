import Vue from 'vue'
import { pageScroll } from '../../../src/utils'
import Alert from './alert.vue'
const AlertConstructor = Vue.extend(Alert)

const instance = new AlertConstructor({
  el: document.createElement('div')
})

const hashChange = function () {
  pageScroll.unlock()

  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}

AlertConstructor.prototype.closeAlert = function () {
  pageScroll.unlock()

  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)

  window.removeEventListener('hashchange', hashChange)

  typeof this.callback === 'function' && this.callback()
};

const AlertFn = (content, options = {}) => {
  instance.content = content
  instance.callback = options.callback

  window.addEventListener('hashchange', hashChange)

  document.body.appendChild(instance.$el)

  pageScroll.lock()
}

export default AlertFn
