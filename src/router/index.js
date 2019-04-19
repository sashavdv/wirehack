import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage'
import BorrowPage from '@/pages/loans/borrowpage'
import InvestPage from '@/pages/investments/investpage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/',
      name: 'Borrow',
      component: BorrowPage
    },
    {
      path: '/',
      name: 'Invest',
      component: InvestPage
    }
  ]
})
