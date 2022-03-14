import Vue from 'vue';
import PersonalCosts from './App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(PersonalCosts),
}).$mount('#app')
