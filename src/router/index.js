import App from '../App'
// 布局
const authLayout = r => require.ensure([], () => r(require('../views/auth/layout')), 'auth')
const signin = r => require.ensure([], () => r(require('../views/auth/signin')), 'auth')
const signup = r => require.ensure([], () => r(require('../views/auth/signup')), 'auth')
const resetPassword = r => require.ensure([], () => r(require('../views/auth/reset_password')), 'auth')

const layout = r => require.ensure([], () => r(require('../views/layout')), 'layout')
const index = r => require.ensure([], () => r(require('../views/index/index')), 'index')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: layout,
      redirect: '/index',
      children: [
        {path: 'index', component: index, name: 'index', meta: {title: '首页'}}
      ]
    },
    {
      path: '',
      component: authLayout,
      children: [
        {path: 'signin', component: signin, name: 'login', meta: {title: '登录'}},
        {path: 'signup', component: signup, name: 'register', meta: {title: '注册'}},
        {path: 'reset_password', component: resetPassword, name: 'reset_password', meta: {title: '找回密码'}}
      ]
    }
  ]
}]
