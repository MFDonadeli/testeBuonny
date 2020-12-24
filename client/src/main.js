import Vue from "vue";
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import App from "./App.vue";
import router from "./router";
import VuexStore  from "./store";

Vue.use(Vuex)
Vue.use(VueResource)
const store = new Vuex.Store(VuexStore)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
