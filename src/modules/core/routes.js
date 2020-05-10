import NotFound from './views/NotFound.vue'

export default [
  {
    path: '/',
    redirect: '/pagamento'
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
]
