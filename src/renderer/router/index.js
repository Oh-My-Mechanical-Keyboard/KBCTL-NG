import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome-page',
      component: require('@/components/startIndex').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
