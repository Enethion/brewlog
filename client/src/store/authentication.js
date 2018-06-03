import HTTP from '@/http.js'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    registerEmail: null,
    registerPassword: null,
    registerError: null,
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
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    register ({ commit, state }) {
      return HTTP()
        .post('auth/register', {
          email: state.registerEmail,
          password: state.registerPassword
        })
        .then(({ data }) => {
          commit('setToken', data.token)
          router.push('/')
        })
        .catch(() => {
          commit('setRegisterError', 'An error has occured trying to create your account')
        })
    }
  }
}
