import Vue from 'vue'
import Router from 'vue-router'
import OrderForm from '@/components/OrderForm'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'order-form',
      component: OrderForm
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
