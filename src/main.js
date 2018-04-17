// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import routes from './router'
import  vuex from 'vuex';
import store from './store'
import FastClick from "fastclick"
import axios from 'axios'
Vue.use(vuex);
Vue.use(Router);
Vue.use(ElementUI);
Vue.prototype.axios=axios;
Vue.config.productionTip = false
const router=new Router({
    routes
})
// 引入mockjs
//移动端点击延迟
if('addEventListener' in document){
    document.addEventListener("DOMContentLoaded",function(){
        FastClick.attach(document.body);
    },false)
}
// require('./mockjs.js')
console.log(vuex,"99999")

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    // template: '<App/>',
    render:h=>h(App)
})

Vue.filter('getYMD', function(input) {
    return input.split(' ')[0];
})
