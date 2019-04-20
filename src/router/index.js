import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage'
import LoansPage from '@/pages/loans/LoansPage'
import LoansSuccessPage from '@/pages/loans/LoanSuccesPage'
import ProfilePage from '@/pages/ProfilePage'
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
      path: '/borrow',
      name: 'Borrow',
      component: BorrowPage
    },
    {
      path: '/invest',
      name: 'Invest',
      component: InvestPage
    },
    {
      path: '/loans',
      name: 'Loans',
      component: LoansPage
    },
    {
      path: '/loans/success',
      name: 'LoansSucces',
      component: LoansSuccessPage
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage
    }
  ]
})
