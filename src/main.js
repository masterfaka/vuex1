// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
/*import Vuex from 'vuex'
Vue.use(Vuex);
esto en el store y se importa directamente*/
Vue.config.productionTip = false;
//Vue.use(Vuex);/*LA CLAAVE para injectar store en todos lo huijos*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App  },
  template: '<App/>'
})
