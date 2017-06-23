import Vue from 'vue'
import Vuex from 'vuex'
import appStore from './appStore'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    appStore
  },
  strict: debug
})
