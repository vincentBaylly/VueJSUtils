import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//declaration global de mixin
Vue.mixin({
  mounted() {
    console.log("I am mixed into every component.");
  },
});

//Déclaration globale d'une directive
// Vue.directive("mydirective", {
//   inserted: function(el) {
//   },
// });

Vue.directive("highlight", {
  bind: function(el, binding) {
    el.style.background = binding.value;
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
