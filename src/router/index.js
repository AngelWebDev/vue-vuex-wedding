import Vue from 'vue'
import Router from 'vue-router'
import Business from '../pages/Business'
import Home from '../pages/Home'
import Promotion from '../pages/Promotion'
import WeddingVenues from '../pages/WeddingVenues'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/offers',
      name: 'Promotion',
      component: Promotion
    },
    {
      path: '/venues',
      name: 'WeddingVenues',
      component: WeddingVenues
    }
  ]
})
