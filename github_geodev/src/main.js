import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts'
import './assets/css/index.css' // 导入css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.echarts = echarts 
Vue.use(dataV)
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		Vue.prototype.$bus = this
	},
  filters: {
    scientificNotation(value) {
      return value.toExponential(0); // 这里的“2”表示要保留的小数位数
    }
  },
}).$mount('#app')
