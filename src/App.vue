<template>
  <div id="app">
    <h-header></h-header>
    <tab></tab>
      <transition name = 'transitionName'>
        <router-view class = 'child-view'></router-view>
      </transition>
  </div>
</template>

<script>
import HHeader from 'components/h-header/h-header'
import tab from 'components/tab/tab'

export default {
  components: {
    HHeader,
    tab
  }
}
</script>

<style lang = 'stylus' rel = 'stylesheet/stylus'>
  .child-view
    position: absolute
    width:100%
    transition: all .8s cubic-bezier(.55,0,.1,1)
  .slide-left-enter, .slide-right-leave-active
    opacity: 0
    -webkit-transform: translate(50px, 0)
    transform: translate(50px, 0)
  .slide-left-leave-active, .slide-right-enter
    opacity: 0
    -webkit-transform: translate(-50px, 0)
    transform: translate(-50px, 0)
</style>
