<template>
  <transition name = 'slide'>
          <component v-bind:is="view"
            :typeNames = 'this.params'
            :heroList = 'this.heroList'
            v-if = 'this.heroList.length'>
          </component>
    <router-view></router-view>
  </transition>
</template>

<script>
import heroTypeView from 'components/hero-view/hero-type-view'

export default {
  data () {
    return {
      view: 'heroTypeView'
    }
  },
  created () {
    this.params = this.$route.params.type
  },
  components: {
    heroTypeView
  },
  props: {
    heroList: {
      type: Array
    }
  }
}
</script>

<style lang = 'stylus' rel = 'sheetstyle/stylus' scoped>
  .bg
    background: #ffffff
  .slide-enter-active,.slide-leave-active
    transition: all .3s
  .slide-enter,.slide-leave-to
    transform: translate3d(100%,0,0)
</style>
