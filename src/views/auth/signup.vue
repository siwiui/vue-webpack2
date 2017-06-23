<template lang="pug">
  .panel
    h1 注册
    .field(style="position:relative")
      label
        i.fa.fa-mobile
      input(type="text" class="input" placeholder="手机号")
      label.sent-sms 发送验证码
    .field
      label
        i.fa.fa-check-square-o
      input(type="text" class="input" placeholder="验证码")
    .field
      label
        i.fa.fa-lock
      input(type="password" class="input" placeholder="密码")
    button(type="button") 注册
    router-link(to="/login", style="margin-top: .5rem") 已有账号？去登录
</template>

<script>
  export default {}
</script>
