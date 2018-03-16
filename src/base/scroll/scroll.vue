<template>
  <div ref = 'warpper'>
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    scrollY: {
      type: Boolean,
      default: true
    },
    momentum: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    startX: {
      type: Number,
      default: 0
    },
    eventPassthrough: {
      type: String,
      default: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.warpper) {
        return ''
      }

      this.scroll = new BScroll(this.$refs.warpper, {
        scrollY: this.scrollY,
        scrollX: this.scrollX,
        startX: this.startX,
        eventPassthrough: this.eventPassthrough
      })
    }
  }
}
</script>

<style scoped>

</style>
