import uppercamelcase from 'uppercamelcase'

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext)
}
const modules = requireAll(require.context(
  './',
  true,
  /^((?!node_modules|lib|toast|indicator|message-box|infinite-scroll|lazyload).)*[^_]index\.js$/)
)

const components = {}

modules.forEach((v, i) => {
  const tag = Object.keys(v)[0]
  if (v[tag] !== undefined && v[tag].name) {
    // asset 不需要被处理
    const name = uppercamelcase(v[tag].name.replace(/wm-/, ''))
    components[name] = v[tag]
  }
})

export default Object.assign({}, {
  install (Vue) {
    modules.forEach((v, i) => {
      const tag = Object.keys(v)[0]
      if (v[tag] === undefined) {
        // asset 不需要被处理
        Vue.component(v[tag].name, v[tag])
      }
    })
  }
}, components)
