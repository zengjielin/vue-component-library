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
  }, {
    path: '/v_strip_progress',
    name: 'VStripProgress',
    component: () => import('@/example/VStripProgress.vue')
  }, {
    path: '/v_button',
    name: 'VButton',
    component: () => import('@/example/VButton.vue')
  }, {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/example/Loading.vue')
  }]
})
