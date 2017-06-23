<template lang="pug">
  .panel
    h1 登录
    .field
      label
        i.fa.fa-user-o
      input(type="text" class="input" placeholder="账户")
    .field
      label
        i.fa.fa-lock
      input(type="password" class="input" placeholder="密码")
    .field(style="width:82%;margin: .5rem 0")
      input(type="checkbox" style="margin:.5rem 1.5rem")
      label 记住密码
    button(type="button") 登录
    router-link(to="/register", style="margin-top: .5rem") 没有账号？去注册
    router-link(to="/reset_password", style="margin-top: .5rem") 忘记密码？
</template>

<script>
  export default {
    data () {
      return {
        token: '',
        userInfo: {}
      }
    },
    mounted () {
    },
    methods: {
      signin () {
      }
    }
  }
</script>
