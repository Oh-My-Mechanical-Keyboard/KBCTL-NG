import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const page_routes = [
  {
    path: '/home',
    name: 'home',
    label: 'Home',
    component: require('@/pages/HomePage').default
  },
  {
    path: '/keyboard',
    name: 'Keyboard',
    label: 'Keyboard',
    component: require('@/pages/KeyboardPage').default
  },
  {
    path: '/macro',
    name: 'Macro',
    label: 'Macro',
    component: require('@/pages/MacroPage').default
  },
  {
    path: '/lighting',
    name: 'Lighting',
    label: 'Lighting',
    component: require('@/pages/LightingPage').default
  },
  {
    path: '/tool',
    name: 'Tool',
    label: 'Tool',
    component: require('@/pages/ToolPage').default
  },
  {
    path: '/advance',
    name: 'Advance',
    label: 'Advance',
    component: require('@/pages/AdvancePage').default
  }
]

export const tool_routes = [
  {
    path: '/keyboardtset',
    name: 'KeyboardTesk',
    label: 'KeyboardTest',
    component: require('@/components/KeyboardTest/index.vue').default
  }
]

export default new Router({
  routes: [
    ...page_routes,
    ...tool_routes,
    // { path: '*', redirect: '/home' }
  ]
})
