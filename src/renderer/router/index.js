import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/home',
    name: 'home-page',
    label: 'Home',
    component: require('@/pages/HomePage').default
  },
  {
    path: '/somewhere',
    name: 'somewhere-page',
    label: 'Somewhere',
    component: require('@/pages/SomewherePage').default
  },
  {
    path: '/elsewhere',
    name: 'elsewhere-page',
    label: 'Elsewhere',
    component: require('@/pages/ElsewherePage').default
  }
]

export default new Router({
  routes: [
    ...routes,
    { path: '*', redirect: '/home' }
  ]
})
