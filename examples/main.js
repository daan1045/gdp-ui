import Vue from 'vue'
import App from './App.vue'
import GdpUI from '../packages'

Vue.config.productionTip = false
Vue.use(GdpUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
