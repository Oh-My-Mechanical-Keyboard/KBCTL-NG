import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/home',
    name: 'home',
    label: 'Home',
    component: require('@/pages/HomePage').default
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    label: 'Keyboard',
    component: require('@/pages/KeyboardPage').default
  },
  {
    path: '/macro',
    name: 'macro',
    label: 'Macro',
    component: require('@/pages/MacroPage').default
  },
  {
    path: '/lighting',
    name: 'lighting',
    label: 'Lighting',
    component: require('@/pages/LightingPage').default
  },
  {
    path: '/tool',
    name: 'tool',
    label: 'Tool',
    component: require('@/pages/ToolPage').default
  },
  {
    path: '/advance',
    name: 'advance',
    label: 'Advance',
    component: require('@/pages/AdvancePage').default
  }
]

export default new Router({
  routes: [
    ...routes,
    { path: '*', redirect: '/home' }
  ]
})
