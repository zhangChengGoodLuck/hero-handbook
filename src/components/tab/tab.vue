<template>
<div class = 'tab-box'>
  <router-link tag="div" to  = "/hero" class = 'tab-box-item'>
    <span class = 'tab-box-link'>英雄</span>
  </router-link>
  <router-link tag="div" to  = "/equipment" class = 'tab-box-item'>
    <span class = 'tab-box-link'>装备</span>
  </router-link>
  <router-link tag="div" to  = "/inscription" class = 'tab-box-item'>
    <span class = 'tab-box-link'>铭文</span>
  </router-link>
</div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~common/stylus/variable.styl'
  .tab-box
    display: flex
    height: 44px
    line-height: 44px
    font-family: "微软雅黑"
    font-size: $font-size-medium
  .tab-box-item
    flex: 1
    text-align: center
    cursor: pointer
    .tab-box-link
      padding-bottom: 5px
      color: $color-dialog-background
      font-weight:600
    &.router-link-active
        .tab-box-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
