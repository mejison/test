import Vue from 'vue'
import VueRouter from 'vue-router'

import { Home, Login, Register, NotFound } from '../pages'
import { PrivateLayout } from '../layouts'

Vue.use(VueRouter)

const getToken = () => {
  return localStorage.getItem('token')
}

const withAuth = (from, to, next) => {
  if (getToken()) {
    return next()
  }
  return next('/login')
}

const routes = [
  {
    path: '/',
    name: 'private',
    component: PrivateLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: withAuth,
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
