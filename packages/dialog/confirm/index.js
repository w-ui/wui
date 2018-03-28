import Vue from 'vue'
import Confirm from './confirm.vue'
const ConfirmConstructor = Vue.extend(Confirm)

const instance = new ConfirmConstructor({
  el: document.createElement('div')
})

ConfirmConstructor.prototype.closeConfirm = function (result, callback) {
  typeof callback === 'function' && callback(result)
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}

const ConfirmFn = (content, options = {}) => {
  instance.content = content
  instance.title = options.title || '提示'
  instance.callback = options.callback
  document.body.appendChild(instance.$el)
}

export default ConfirmFn
