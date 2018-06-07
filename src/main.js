import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import axios from 'axios';
Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.prototype.axios = axios
new Vue({
  render: h => h(App)
}).$mount('#app')
