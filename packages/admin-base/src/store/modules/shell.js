import * as types from '../mutation-types'

const state = {
  loading: false,
  header: ''
}

const actions = {
  loadStart({ commit }) {
    commit(types.SHELL_LOAD_START)
  },
  loadEnd({ commit }) {
    commit(types.SHELL_LOAD_END)
  },
  setHeader({ commit }, data) {
    commit(types.SHELL_SET_HEADER, data)
  }
}

const mutations = {
  [types.SHELL_LOAD_START](state) {
    state.loading = true
  },
  [types.SHELL_LOAD_END](state) {
    state.loading = false
  },
  [types.SHELL_SET_HEADER](state, data) {
    state.header = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
