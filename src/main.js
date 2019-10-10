import Vue from 'vue'
import App from './App'
import router from './router'

/// configuracion escencial 
import VueResource from 'vue-resource';
//import VueSessionStorage from 'vue-sessionstorage'

Vue.use(VueResource);
//Vue.use(VueSessionStorage)
Vue.config.productionTip = false
/// configuracion escencial 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
