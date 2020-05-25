import * as api from '../../api/auth'

const auth = {
  namespaced: true,

  state: {
    token: '',
  },

  getters: {
    token: state => state.token,
  },

  actions: {
    login({ commit }, data) {
      return api.setCSRFCookie().then(() => {
        return api.login(data).then(response => {
          const { data: { data } } = response
          if (data) {
            if (data.token) {
              commit('setToken', data.token)
              return Promise.resolve(true)
            }
          }
          return Promise.resolve(false)
        })
      })
    },
    register({ commit }, data) {
      return api.setCSRFCookie().then(() => {
        return api.register(data).then(response => {
          const { data: { data } } = response
          if (data) {
            if (data.token) {
              commit('setToken', data.token)
              return Promise.resolve(true)
            }
          }
          return Promise.resolve(false)
        })
      })
    },
    logout() {
      localStorage.removeItem('token')
      return Promise.resolve();
    }
  },

  mutations: {
    setToken(state, payload) {
      localStorage.setItem('token', payload)
      state.token = payload
    }
  },
}

export default auth