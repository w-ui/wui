const SortableClass = require('./src/sortable.js')

const Sortable = {
  name: 'w-sortable'
}

Sortable.install = function (Vue) {
  Vue.directive('sortable', {
    inserted: function (el, binding) {
      var sortable = new SortableClass(el, binding.value || {})
    }
  })
}

export {Sortable}
