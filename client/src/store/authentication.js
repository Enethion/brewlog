import HTTP from '@/http.js'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    registerEmail: null,
    registerPassword: null,
    registerError: null,
    loginEmail: null,
    loginPassword: null,
    loginError: null,
    token: null
  },
  mutations: {
    setRegisterEmail (state, email) {
      state.registerEmail = email
    },
    setRegisterPassword (state, password) {
      state.registerPassword = password
    },
    setRegisterError (state, error) {
      state.registerError = error
    },
    setLoginEmail (state, email) {
      state.loginEmail = email
    },
    setLoginPassword (state, password) {
      state.loginPassword = password
    },
    setLoginError (state, error) {
      state.loginError = error
    },
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    register ({ commit, state }) {
      commit('setRegisterError', null)
      return HTTP()
        .post('auth/register', {
          email: state.registerEmail,
          password: state.registerPassword
        })
        .then(({ data }) => {
          commit('setToken', data.token)
          commit('setRegisterEmail', null)
          commit('setRegisterPassword', null)
          router.push('/')
        })
        .catch(() => {
          commit(
            'setRegisterError',
            'An error has occured trying to create your account'
          )
        })
    },
    logout ({ commit, state }) {
      commit('setToken', null)
      router.push('/login')
    },
    login ({ commit, state }) {
      commit('setLoginError', null)
      return HTTP()
        .post('auth/login', {
          email: state.loginEmail,
          password: state.loginPassword
        })
        .then(({ data }) => {
          commit('setToken', data.token)
          commit('setLoginEmail', null)
          commit('setLoginPassword', null)
          router.push('/')
        })
        .catch(() => {
          commit(
            'setLoginError',
            'An error has occured trying to log you in'
          )
        })
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    }
  }
}
