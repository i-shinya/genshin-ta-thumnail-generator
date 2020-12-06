import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

// Google Analyticsの設定
Vue.use(VueAnalytics, {
  id: 'G-QNPBBQMLHK'
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
