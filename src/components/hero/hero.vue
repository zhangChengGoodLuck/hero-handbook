<template>
  <div class = 'hero-box'>
    <hero-index-view :heroList = 'heroList'  v-if='heroList.length'></hero-index-view>
    <router-view :heroList = 'heroList' v-if='heroList.length'></router-view>
  </div>
</template>

<script>

import getHeroList from 'api/herolist'
import heroIndexView from 'components/hero-view/hero-index-view'

export default {
  data () {
    return {
      heroList: []
    }
  },
  created () {
    this._getHeroList()
  },
  methods: {
    _getHeroList () {
      getHeroList().then((res) => {
        this.heroList = res
      })
    }
  },
  components: {
    heroIndexView
  }
}
</script>

<style lang = 'stylus' rel = 'stylesheet/stylus' scoped>
.hero-box
  position: relative
  top: 0px
  bottom: 0
  width: 100%
</style>
