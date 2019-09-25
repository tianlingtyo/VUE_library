import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta:{
        title:'组件Demo'
      } ,
      component: resolve => require(['@/views/demo.vue'], resolve),
    }
  ]
})




