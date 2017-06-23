<template lang="pug">
div
  siwi-header
  router-view
  siwi-footer
</template>
<script>
  import siwiHeader from '@/components/header'
  import siwiFooter from '@/components/footer'
  export default {
    components: {
      siwiHeader,
      siwiFooter
    }
  }
</script>

