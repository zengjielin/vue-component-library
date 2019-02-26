import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  }, {
    path: '/v_switch',
    name: 'VSwitch',
    component: () => import('@/example/VSwitch.vue')
  }, {
    path: '/v_circle_progress',
    name: 'VCircleProgress',
    component: () => import('@/example/VCircleProgress.vue')
  }]
})
