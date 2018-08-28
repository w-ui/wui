import Vue from 'vue'
import LoadingCompo from './src/Loading.vue'
const LoadingConstructor = Vue.extend(LoadingCompo)

const instance = new LoadingConstructor({
  el: document.createElement('div')
})

LoadingConstructor.prototype.hide = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
};

const Loading = () => {
  document.body.appendChild(instance.$el)
  return instance;
}
export { Loading }

