import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.6.127/api/'
axios.defaults.headers.common['accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
