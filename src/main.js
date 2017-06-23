import './styles/siwi.styl'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './vuex'
import Utils from './utils/utils'
import App from './App.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    console.log('保存位置 savedPosition', savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth === true) {
    if (Utils.checkSignSatus()) {
      Utils.title(to.meta.title)
      next()
    } else {
      Utils.title(to.meta.title)
      next({ name: 'signIn' })
    }
  }
  Utils.title(to.meta.title)
  next()
})
router.afterEach(function (to) {
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
