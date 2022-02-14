import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/home',
    name: 'home',
    label: 'ui.home',
    component: require('@/pages/HomePage').default
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    label: 'ui.keyboard',
    component: require('@/pages/KeyboardPage').default
  },
  {
    path: '/macro',
    name: 'macro',
    label: 'ui.macro',
    component: require('@/pages/MacroPage').default
  },
  {
    path: '/lighting',
    name: 'lighting',
    label: 'ui.lighting',
    component: require('@/pages/LightingPage').default
  },
  {
    path: '/tool',
    name: 'tool',
    label: 'ui.tool',
    component: require('@/pages/ToolPage').default
  },
  {
    path: '/advance',
    name: 'advance',
    label: 'ui.advance',
    component: require('@/pages/AdvancePage').default
  }
]

export default new Router({
  routes: [
    ...routes,
    { path: '*', redirect: '/home' }
  ]
})
