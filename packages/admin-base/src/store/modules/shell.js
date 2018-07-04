import * as types from '../mutation-types'

const state = {
  loading: false
}

const actions = {
  loadStart({ commit }) {
    commit(types.SHELL_LOAD_START)
  },
  loadEnd({ commit }) {
    commit(types.SHELL_LOAD_END)
  }
}

const mutations = {
  [types.SHELL_LOAD_START](state) {
    state.loading = true
  },
  [types.SHELL_LOAD_END](state) {
    state.loading = false
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
