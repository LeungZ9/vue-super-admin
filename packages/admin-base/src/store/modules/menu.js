import * as types from '../mutation-types'
const COLLAPSE_STORAGE = 'menuCollapse'
const PROTOCOL_REGEX = new RegExp('^https?://', 'i')

const state = {
  data: [],
  collapse: localStorage.getItem(COLLAPSE_STORAGE) === 'true' || false,
  current: [],
  params: {}
}

const getters = {
  menu: state => {
    return state.data.filter(ele => ele.parent === null)
  },
  subMenu: state => {
    const parent = state.current[state.current.length - 2]
    const items = parent ? state.data.filter(ele => ele.parent === parent.id) : []
    return Object.assign({}, parent, { items })
  }
}

const actions = {
  setData({ commit }, data) {
    commit(types.MENU_SET_DATA, data)
  },
  setCurrent({ commit }, data) {
    commit(types.MENU_SET_CURRENT, data)
  },
  toggleCollapse({ commit }) {
    commit(types.MENU_TOGGLE_COLLAPSE)
  }
}

const mutations = {
  [types.MENU_SET_DATA](state, data) {
    state.data = data
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
        } else current.unshift(item)
      }

      url = PROTOCOL_REGEX.test(current[0].url) ? new URL(current[0].url) : new URL(current[0].url, location.origin)
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
