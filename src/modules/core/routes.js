import NotFound from './views/NotFound.vue'

export default [
  /*
  {
    path: '/',
  },
  */
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
]
