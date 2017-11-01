const SortableClass = require('./src/sortable.js')

const CSortable = {
  name: 'w-sortable'
}

CSortable.install = function (Vue) {
  Vue.directive('sortable', {
    inserted: function (el, binding) {
      var sortable = new SortableClass(el, binding.value || {})
    }
  })
}

export default CSortable
