import carousel from './carousel'
import scroll from './scroll'
import sticky from './sticky'
import lazyImage from './lazyImage'
import drag from './drag'
import loading from './loading'
import search from './search'
import drawer from './drawer'
import toast from './toast'
import messageBox from './messageBox'

const components = [
  carousel,
  scroll,
  sticky,
  lazyImage,
  drag,
  loading,
  search,
  drawer
]

const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  }
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.use(toast)
  Vue.use(messageBox)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};


export {
  loading,
  carousel,
  scroll,
  sticky,
  lazyImage,
  drag,
  search,
  drawer,
  toast,
  messageBox
}
