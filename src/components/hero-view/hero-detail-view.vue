<template>
  <div>
    <a href="">ok</a>
  </div>
</template>

<script>
export default{
  data () {
    return {
    }
  },
  created () {
    console.log(this.hid)
  },
  computed: {
  },
  props: {
    hid: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
