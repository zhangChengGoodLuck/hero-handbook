<template>
  <div class = "hero-type-box">
    <img :src= 'typeImg' width = '150' height = '150'>
    <h2 class = 'typeName'>{{this.typeName}}</h2>
    <p class = 'typeDescribe'>{{this.typeDescribe}}</p>
    <ul class = 'hero-list'>
      <li v-for="item in typeheroList" :key="item.title" class = 'hero-box' @click = 'herodetail(item.ename)'>
        <img :src='heroImg(item.ename)' width = '60' height="60" class = 'heroImg'>
        <span class = 'cname'>{{item.cname}}</span>
        <img class = 'right-icon' src='/static/right.png' width="32" height="32">
      </li>
    </ul>
  </div>
</template>

<script>
import {initHeroTypeList} from 'common/js/herolist'

let TOP_HEIGHT = 88

export default {
  data () {
    return {
      typeData: [
        {
          tid: 3,
          typeName: 'tank',
          typeCname: '坦克',
          typeDescribe: '坦克的作用是保护我方后排脆皮英雄，并且扰乱敌方阵型，吸收伤害。'
        },
        {
          tid: 1,
          typeName: 'warrior',
          typeCname: '战士',
          typeDescribe: '战士兼具输出和生存两大优势，作用为保护我方后排和杀伤对面脆皮。'
        },
        {
          tid: 4,
          typeName: 'assassin',
          typeCname: '刺客',
          typeDescribe: '刺客的作用是收割对面脆皮输出，首要攻击对象为射手和法师。'
        },
        {
          tid: 2,
          typeName: 'mage',
          typeCname: '法师',
          typeDescribe: '法师的作用为消耗、收割和控制，需要注意的是保证自身存活后，打出伤害。'
        },
        {
          tid: 5,
          typeName: 'shooter',
          typeCname: '射手',
          typeDescribe: '射手的作用最为直接，杀伤对手，但相对十分脆弱，难点在于灵活的走位。'
        },
        {
          tid: 6,
          typeName: 'aid',
          typeCname: '辅助',
          typeDescribe: '辅助的作用在于提高队伍的生存能力，增强队伍的攻击性。'
        }
      ],
      typeheroList: []
    }
  },
  computed: {
    typeImg () {
      return `/static/c${this.typeNames}.png`
    }
  },
  created () {
    this._initClientSize()
    this._initTypeData()
  },
  methods: {
    _initClientSize () {
      let clientW = document.documentElement.clientWidth
      let clientH = document.documentElement.clientHeight
      setTimeout(() => {
        document.querySelector('.hero-type-box').style.width = clientW + 'px'
        document.querySelector('.hero-type-box').style.height = clientH - TOP_HEIGHT + 'px'
      }, 10)
    },
    _initTypeData () {
      let name = this.typeNames
      for (var i = 0; i < this.typeData.length; i++) {
        if (this.typeData[i].typeName === name) {
          this.typeName = this.typeData[i].typeCname
          this.typeDescribe = this.typeData[i].typeDescribe
          this.tid = this.typeData[i].tid
        }
      }
      this.typeheroList = initHeroTypeList(this.heroList, this.tid)
    },
    herodetail (hid) {
      console.log(hid)
      this.$router.push({
        path: `${this.$route.path}/${hid}`
      })
    },
    heroImg (ename) {
      return `http://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}.jpg`
    }
  },
  props: {
    typeNames: {
      type: String,
      default: ''
    },
    heroList: {
      type: Array
    }
  }
}
</script>

<style lang = 'stylus' rel = 'sheetstyle/stylus' scoped>
@import '~common/stylus/variable.styl'

    .hero-type-box
      position:relative
      top: 10px
      height:100%
      z-index: 999
      background: $color-text
      text-align:center
      .typeName
        font-size:20px
        color: #454545
        margin-top:20px
      .typeDescribe
        font-size:14px
        color: #9c9c9c
        letter-spacing:1.5px
        line-height:20px
        margin-top:20px
      .hero-list
        margin-top:30px
        background: #ffffff
        .hero-box
          height:70px
          box-shadow:0px 0px 2px #d8d7d7
          border-top-left-radius: 40px
          border-bottom-left-radius: 40px
          position:relative
          margin:10px 0
          .heroImg
            padding-top: 5px
            border-radius: 50%
            position: absolute
            left:20px
          .cname
            position: absolute
            left:100px
            font-size:16px
            line-height:20px
            padding-top:23px
            color: #686868
          .right-icon
            position: absolute
            right:20px
            margin-top:19px
</style>
