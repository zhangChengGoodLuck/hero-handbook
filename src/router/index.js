import Vue from 'vue'
import Router from 'vue-router'
import Hero from 'components/hero/hero'
import Equipment from 'components/equipment/equipment'
import Inscription from 'components/inscription/inscription'
import heroType from 'components/hero-type/hero-type'
import heroDetail from 'components/hero-detail/hero-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hero'
    },
    {
      path: '/hero',
      component: Hero,
      children: [
        {
          path: ':type',
          component: heroType,
          children: [
            {
              path: ':id',
              component: heroDetail
            }
          ]
        }
      ]
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
