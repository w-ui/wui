import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {path: '/', component: () => import('./page/Index')},
    {path: '/guide', component: () => import('./page/Guide')},
    {path: '/component', component: () => import('./page/Component')},
    {
      path: '/doc',
      name: 'docIndex',
      component: () => import('./page/Doc'),
      props: {
        name: "Index"
      }
    },
    {
      path: '/doc/:name',
      name: 'doc',
      component: () => import('./page/Doc'),
      props: true
    },
    {
      path: '/demo/:name',
      name: 'demo',
      component: () => import('./page/Demo'),
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./page/About'),
      props: true
    }
  ]
})