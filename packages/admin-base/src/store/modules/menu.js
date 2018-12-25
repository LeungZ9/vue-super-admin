import * as types from '../mutation-types'
const COLLAPSE_STORAGE = 'menuCollapse'
const PROTOCOL_REGEX = new RegExp('^https?://', 'i')

const getByParent = function(state, id) {
  return state.data.filter(ele => ele.parent === id)
}

const state = {
  hidden: false,
  data: [],
  collapse: localStorage.getItem(COLLAPSE_STORAGE) === 'true' || false,
  current: [],
  params: {}
}

const getters = {
  menu: state => getByParent(state, null),
  menuByParent: state => id => getByParent(state, id)
}

const actions = {
  setData({ commit }, data) {
    commit(types.MENU_SET_DATA, data)
  },
  setHidden({ commit }, data) {
    commit(types.MENU_SET_HIDDEN, data)
  },
  setCurrent({ commit }, data) {
    commit(types.MENU_SET_CURRENT, data)
    commit(types.MENU_SET_HIDDEN, false)
  },
  toggleCollapse({ commit }) {
    commit(types.MENU_TOGGLE_COLLAPSE)
  }
}

const mutations = {
  [types.MENU_SET_DATA](state, data) {
    state.data = data
  },
  [types.MENU_SET_HIDDEN](state, data) {
    state.hidden = !!data
  },
  [types.MENU_TOGGLE_COLLAPSE](state) {
    state.collapse = !state.collapse
    localStorage.setItem(COLLAPSE_STORAGE, state.collapse)
  },
  [types.MENU_SET_CURRENT](state, data) {
    const name = data.name && data.name.split('.')[0]
    const items = state.data.filter(ele => ele.url === name)
    let current = []

    for (let i in items) {
      let url = ''
      let pre = ''
      let item = items[i]
      current = [item]

      while (item && item.parent) {
        item = state.data.find(ele => ele.id === item.parent)
        pre = state.current.indexOf(item)
        if (~pre) {
          current = state.current.slice(0, pre + 1).concat(current)
          break
        } else item.url && current.unshift(item)
      }

      url = PROTOCOL_REGEX.test(current[0].url)
        ? new URL(current[0].url)
        : new URL(current[0].url, location.origin)
      if (url.pathname === location.pathname) break
    }

    state.params = data.params
    state.current = current
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
