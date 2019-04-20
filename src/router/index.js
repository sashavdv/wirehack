import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage'
import BorrowPage from '@/pages/borrowpage'
import InvestPage from '@/pages/investpage'
import LoansPage from '@/pages/LoansPage'
import ProfilePage from '@/pages/ProfilePage'

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
    },
    {
      path: '/',
      name: 'Loans',
      component: LoansPage
    },
    {
      path: '/',
      name: 'Profile',
      component: ProfilePage
    }
  ]
})
