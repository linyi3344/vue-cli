import Vue from 'vue'
import App from './App.vue'

//引入全局资源 == index.html里面 src
import './assets/css/base.css' //公共基础样式
import './assets/js/font'

//引入动画
import 'animate.css';

//链接路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);//安装路由插件
//引入路由配置
import routes from './router.config';

//创建路由对象
const router = new VueRouter(routes);

//引入状态管理
import store from './store';

//引入交互插件
import axios from 'axios';
Vue.prototype.$http=axios; //注册Vue全局类下的原型方法
// Vue.use(axios);   axios 内部没有install Vue.component('...',fn)

// 请求之前  拦截器，显示loading
axios.interceptors.request.use(function (config) {
  store.dispatch('showLoading');
  
  return config;//config会在你拦截之后，继续请求
  
}, function (error) {
  return Promise.reject(error);//交给了catch处理
});

// 数据响应回来时做一个拦截，隐藏loading.....
axios.interceptors.response.use(function (response) {
  store.dispatch('hideLoading');
  return response;//给axios的then处理
}, function (error) {
  return Promise.reject(error);
});

//引入全局过滤器
import filters from './filters'; //默认引入index
// console.log(filters);
/* for(var key in filters){
  Vue.filter(key,filters[key]);
} */

Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));



//引入全局loading组件
import loading from './loading';
Vue.use(loading);

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 注册路由
  store 
})
