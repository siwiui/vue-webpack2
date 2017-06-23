import storage from '@/utils/storage'
const state = {
  // 用户信息
  authUser: storage.getItem('authUser'),
  // oauth token
  token: storage.getItem('token'),
  // 视图调节器
  resize: {
    col_span: 12,
    col_offset: 2
  }
}
const mutations = {
  SET_USER_DATA (state, payload) {
    state.authUser = payload
  },
  SET_TOKEN (state, payload) {
    state.token = payload
  },
  SET_RESIZE (state, payload) {
    state.resize = payload
  }
}
const actions = {
  setUserData ({commit}, payload) {
    commit('SET_USER_DATA', payload)
  },
  setToken ({commit}, payload) {
    commit('SET_TOKEN', payload)
  },
  setResize ({commit}, payload) {
    commit('SET_RESIZE', payload)
  }
}
export default {
  state, mutations, actions
}
