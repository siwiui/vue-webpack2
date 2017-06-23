<template lang="pug">
  router-view
</template>

<style lang="stylus">
  body {
    // background: #232D32;
  }

  .wangEditor-container {
    border: none !important;
  }

  .wangEditor-menu-container .menu-group {
    border-right: none !important;
  }

  .vue-input-tag-wrapper {
    margin-top: .2rem;
    border: none !important;
    height: 5rem;
    line-height: 3.7rem;
    .input-tag {
      height: 3rem;
      line-height: 3rem;
      background-color: #35BDB2 !important;
      border: 1px solid #35BDB2 !important;
      color: white !important;
      border-radius: 2rem !important;
      padding: 0 2rem !important;
      .remove {
        &::before {
          content: " x";
          color: #FFFFFF;
        }
      }
    }
  }

  .markdown-editor .CodeMirror,
  .markdown-editor .CodeMirror-scroll {
    min-height: 600px;
  }
</style>
