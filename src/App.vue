<template>
  <div id="app">
    <h-header></h-header>
    <tab></tab>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import HHeader from 'components/h-header/h-header'
import Tab from 'components/tab/tab'

export default {
  components: {
    HHeader,
    Tab
  }
}
</script>

<style>
</style>
