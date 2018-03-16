import Vue from 'vue'
import Router from 'vue-router'
import Hero from 'components/hero/hero'
import Equipment from 'components/equipment/equipment'
import Inscription from 'components/inscription/inscription'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hero'
    },
    {
      path: '/hero',
      component: Hero
    },
    {
      path: '/equipment',
      component: Equipment
    },
    {
      path: '/inscription',
      component: Inscription
    }
  ]
})
