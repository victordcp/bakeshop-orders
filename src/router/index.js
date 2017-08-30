import Vue from 'vue'
import Router from 'vue-router'
import Yolo from '@/components/Yolo'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/yolo',
      name: 'yolo',
      component: Yolo
    }
  ]
})
