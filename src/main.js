import Vue from 'vue'
import App from './App'
import router from './router'
import index from './index';
Vue.use(index);



Vue.config.productionTip = false;

router.beforeEach((to,from,next)=>{
  window.document.title=to.meta.title;
  next();
});
router.afterEach((to,from,next)=>{
  window.scrollTo(0,0)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
