import * as types from '../mutation-types'

const state = {
  hidden: false,
  title: ''
}

const actions = {
  setHidden({ commit }, data) {
    commit(types.HEAD_SET_HIDDEN, data)
  },
  setTitle({ commit }, data) {
    commit(types.HEAD_SET_TITLE, data)
    commit(types.HEAD_SET_HIDDEN, false)
  }
}

const mutations = {
  [types.HEAD_SET_HIDDEN](state, data) {
    state.hidden = !!data
  },
  [types.HEAD_SET_TITLE](state, data) {
    state.title = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
