import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage'
import LoansPage from '@/pages/loans/LoansPage'
import LoansSuccessPage from '@/pages/loans/LoanSuccesPage'
import LoanDetailsPage from '@/pages/loans/LoanDetailsPage'
import ProfilePage from '@/pages/ProfilePage'
import BorrowPage from '@/pages/loans/borrowpage'
import InvestPage from '@/pages/investments/investpage'
import LoanCreate from '@/pages/loans/createLoan'
import InvestSuccesPage from '@/pages/investments/InvestSuccesPage'
import InvestmentProfilePage from '@/pages/person/ProfilePage'
import InvestmentsOverviewPage from '@/pages/investments/InvestmentsOverview'
import InvestmentsDiscoverPage from '@/pages/investments/InvestmentsDiscovery'

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
      name: 'InvestSuccesPage',
      component: InvestSuccesPage
    },
    {
      path: '/invest/overview',
      name: 'InvestmentsOverview',
      component: InvestmentsOverviewPage
    },
    {
      path: '/invest/discover',
      name: 'InvestmentsDiscovery',
      component: InvestmentsDiscoverPage
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
      path: '/loans/details/id',
      name: 'LoansDetails',
      component: LoanDetailsPage
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
