import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage'
import LoansPage from '@/pages/loans/LoansPage'
import LoansSuccessPage from '@/pages/loans/LoanSuccesPage'
import ProfilePage from '@/pages/ProfilePage'
import BorrowPage from '@/pages/loans/borrowpage'
import InvestPage from '@/pages/investments/investpage'
import LoanCreate from '@/pages/loans/createLoan'
import InvestSuccesPage from '@/pages/investments/InvestSuccesPage'
import InvestmentProfilePage from '@/pages/person/ProfilePage'

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
      path: '/invest/success',
      name: 'InvestSuccess',
      component: InvestSuccesPage
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
    },
    {
      path: '/loans/create',
      name: 'LoanCreate',
      component: LoanCreate
    },
    {
      path: '/loaner/id',
      name: 'ProfilePerson',
      component: InvestmentProfilePage
    }
  ]
})
