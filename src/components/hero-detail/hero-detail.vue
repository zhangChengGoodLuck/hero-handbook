<template>
  <transition name = 'slide' tag = 'div'>
    <hero-detail :hid = 'this.hid'></hero-detail>
  </transition>
</template>

<script>
import heroDetail from 'components/hero-view/hero-detail-view'

export default {
  data () {
    return {
    }
  },
  created () {
    this.hid = this.$route.params.id
    console.log(this.hid)
  },
  components: {
    heroDetail
  }
}
</script>

<style lang = 'stylus' rel = 'stylesheet/stylus' scoped>
  .slide-enter-active,.slide-leave-active
    transition: all .3s
  .slide-enter,.slide-leave-to
    transform: translate3d(100%,0,0)
</style>
