import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueRoughNotation from 'vue-rough-notation';

Vue.config.productionTip = false
Vue.use(VueRoughNotation);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
