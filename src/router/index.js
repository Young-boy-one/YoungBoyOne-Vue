import Vue from 'vue';
import Router from 'vue-router';
import poss from '@/components/page/Poss';
import cashier from '@/components/page/cashier';
import shop from '@/components/page/shop';
import goods from '@/components/page/goods';
import member from '@/components/page/member';
import statistics from '@/components/page/statistics';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: poss
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: cashier
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics
    }
  ]
})
