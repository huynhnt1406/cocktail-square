import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
