import Vue from 'vue'
import Notify from './notify.vue'
const NotifyConstructor = Vue.extend(Notify)

const instance = new NotifyConstructor({
  el: document.createElement('div')
})

let timer = null
let lock = false

NotifyConstructor.prototype.closeNotify = function () {
  instance.classes = 'wui-notify-out'

  setTimeout(() => {
    const el = instance.$el
    el.parentNode && el.parentNode.removeChild(el)
    lock = false
  }, 150)

  typeof this.callback === 'function' && this.callback()
}

const NotifyFn = (content, options = {}) => {
  instance.classes = ''
  instance.content = content
  instance.timeout = ~~options.timeout || 5000
  instance.callback = options.callback

  if (lock) return
  lock = true

  document.body.appendChild(instance.$el)

  instance.$el.addEventListener('click', () => {
    clearTimeout(timer)
    instance.closeNotify()
  })

  timer = setTimeout(() => {
    clearTimeout(timer)
    instance.closeNotify()
  }, instance.timeout)
}

export default NotifyFn
