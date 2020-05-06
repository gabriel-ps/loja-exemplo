import Vue from 'vue'
import Vuex from 'vuex'

import core from '@/modules/core/store'

Vue.use(Vuex)

const modules = {
  core
}

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
  // state: {},
  // actions: {},
  // mutations: {},
  // getters: {}
})
