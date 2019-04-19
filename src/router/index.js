import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    }
  ]
})
