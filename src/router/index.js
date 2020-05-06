import Vue from 'vue'
import Router from 'vue-router'

import core from '@/modules/core/routes'

Vue.use(Router)

const routes = [
  ...core
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta) {
    document.title = to.meta.title
  }
  next()
})

export default router
