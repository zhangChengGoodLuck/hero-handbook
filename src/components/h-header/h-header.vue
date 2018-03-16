<template>
  <div class = "header-container">
    <!-- <div class = 'icon'></div> -->
    <div class="text">
      王者图鉴
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" rel = "stylesheet/stylus" scoped>
 @import '~common/stylus/variable.styl'
 @import '~common/stylus/mixin.styl'
  .header-container
    position: relative
    header:44px
    text-align: center
    color:$color-dialog-background
    font-size:0
    .icon
      display:inline-block
      vertical-align:top
      width:30px
      height:32px
      margin-right:9px
      bg-image('logo')
      background-size:30px 32px
 .text
   display: inline-block
   vertical-align: top
   line-height: 44px
   font-size: $font-size-large
   font-weight:600
</style>
