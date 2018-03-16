<template>
<div class = 'tab'>
  <router-link tag="div" to  = "/hero" class = 'tab-item'>
    <span class = 'tab-link'>英雄</span>
  </router-link>
  <router-link tag="div" to  = "/equipment" class = 'tab-item'>
    <span class = 'tab-link'>装备</span>
  </router-link>
  <router-link tag="div" to  = "/inscription" class = 'tab-item'>
    <span class = 'tab-link'>铭文</span>
  </router-link>
</div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~common/stylus/variable.styl'
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-family: "微软雅黑"
    font-size: $font-size-medium
  .tab-item
    flex: 1
    text-align: center
    cursor: pointer
    .tab-link
      padding-bottom: 5px
      color: $color-text-2
      font-weight:600
    &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
