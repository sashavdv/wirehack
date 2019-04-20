// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import moment from 'moment'

// Router
import router from './router'
import Axios from 'axios'
import './config/http'
import store from './config/store'

// Element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

// Tailwind
import '@/assets/style/tailwind.css'

// Use element
Vue.use(Element, {locale})

// Adding prototypes
Vue.prototype.$http = Axios
Vue.prototype.$store = store
Vue.prototype.moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
