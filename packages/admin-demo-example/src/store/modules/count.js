import * as types from '../mutation-types'

const state = {
  num: 0
}

const actions = {
  increase({ commit }) {
    commit(types.COUNT_INCREASE)
  },
  decrease({ commit }) {
    commit(types.COUNT_DECREASE)
  }
}

const mutations = {
  [types.COUNT_INCREASE](state) {
    state.num++
  },
  [types.COUNT_DECREASE](state) {
    state.num--
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
