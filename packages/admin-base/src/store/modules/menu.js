import * as types from '../mutation-types'
const COLLAPSE_STORAGE_NAME = 'menuCollapse'

const state = {
  data: [],
  collapse: localStorage.getItem(COLLAPSE_STORAGE_NAME) === 'true' || false
}

const getters = {
  menu: state => {
    return state.data.filter(ele => ele.parent === null)
  },
  subMenu: state => {
    return state.data.filter(ele => ele.parent === 1)
  }
}

const actions = {
  setData({ commit }, data) {
    commit(types.MENU_SET_DATA, data)
  },
  toggleCollapse({ commit }) {
    commit(types.MENU_TOGGLE_COLLAPSE)
  }
}

const mutations = {
  [types.MENU_SET_DATA](state, data) {
    state.data = data
  },
  [types.MENU_TOGGLE_COLLAPSE](state, data) {
    state.collapse = !state.collapse
    localStorage.setItem(COLLAPSE_STORAGE_NAME, state.collapse)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
