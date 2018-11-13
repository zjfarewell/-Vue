import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import User from '@/components/user'
import Pro_list from '@/components/pro_list'
import Shop_cart from '@/components/shop_cart'
import Pro_categories from '@/components/pro_categories'
import Pro_details from '@/components/pro_details'
import Pro_search from '@/components/pro_search'
import Register from '@/components/register'
import Login from '@/components/login'
import Confirm_order from '@/components/confirm_order'
import Pay from '@/components/pay'
import Pay_success from '@/components/pay_success'
import Pay_failure from '@/components/pay_failure'
import Order from '@/components/order'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name: Home ,
      component:Home
    },
    {
      path:'/pro_list',
      name: Pro_list ,
      component:Pro_list
    },
    {
      path:'/shop_cart',
      name: Shop_cart ,
      component:Shop_cart
    },
    {
      path:'/user',
      name: User ,
      component:User
    },
    {
      path:'/pro_categories',
      name: Pro_categories ,
      component:Pro_categories
    },
    {
      path:'/pro_details',
      name: Pro_details ,
      component:Pro_details
    },
    {
      path:'/pro_search',
      name: Pro_search ,
      component:Pro_search
    },
    {
      path:'/register',
      name: Register ,
      component:Register
    },
    {
      path:'/login',
      name: Login ,
      component:Login
    },
    {
      path:'/confirm_order',
      name: Confirm_order ,
      component:Confirm_order
    },
    {
      path:'/pay',
      name: Pay ,
      component:Pay
    },
    {
      path:'/pay_success',
      name: Pay_success ,
      component:Pay_success 
    },
    {
      path:'/pay_failure',
      name: Pay_failure ,
      component:Pay_failure
    },
    {
      path:'/order',
      name: Order ,
      component:Order
    }

  ]
})
