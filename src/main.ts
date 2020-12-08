import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueGtag from 'vue-gtag';

Vue.config.productionTip = false;

// Google Analyticsの設定
Vue.use(VueGtag, {
  config: {id: 'G-QNPBBQMLHK'}
}, router);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
