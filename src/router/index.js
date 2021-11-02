import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
     {
      path: '',
      name: 'xtsy',
      component: () => import('../views/xtsy/index.vue'),
     },
     {
      path: 'jbxx',
      name: 'jbxx',
      component: () => import('../views/jbxx/index.vue'),
     },
     {
      path: '/gouwu',
      name: 'gouwu',
      component: () => import('../views/gouwu/Home.vue'),
    },
    {
      path: '/first',
      name: 'first',
      component: () => import('../views/first/index.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/gouwu/Cart.vue'),
    },
    {
      path: '/first',
      name: 'first',
      component: () => import('../views/first/index.vue'),
    },
     {
      path: 'kcgl',
      name: 'kcgl',
      component: () => import('../views/kcgl/index.vue'),
     }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
