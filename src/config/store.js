import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    user: localStorage.getItem('user') || ''
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, user) {
      state.status = 'success'
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.user = ''
    }
  },
  actions: {
    login ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://192.168.6.127/c2cLoansAPI/api/user/login', params: { 'username': user.username, 'password': user.password }, method: 'GET' })
          .then(resp => {
            const user = resp.data[0]
            localStorage.setItem('user', user)
            commit('auth_success', user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('user')
            reject(err)
          })
      })
    },
    logout ({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('user')
        resolve()
      })
    }
  },
  getters: {
    getUser: state => state.user
  }
})
