import Vue from 'vue'
import Router from 'vue-router'
import Test from '../views/keyboard_test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/test',
      component: Test,
      name: 'test'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
