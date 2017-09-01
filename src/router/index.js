import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'shopping-cart',
      component: ShoppingCart
    }
  ]
})
