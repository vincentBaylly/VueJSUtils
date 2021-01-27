MyPlugin.install = function(Vue, options) {
  // 1. ajouter une méthode globale ou une propriété
  Vue.myGlobalMethod = function() {
    // de la logique de code...
  };

  // 2. ajouter une ressource globale
  Vue.directive("my-directive", {
    bind(el, binding, vnode, oldVnode) {
      // de la logique de code...
    },
  });

  // 3. injecter des options de composant
  Vue.mixin({
    created: function() {
      // de la logique de code...
    },
  });

  // 4. ajouter une méthode d'instance
  Vue.prototype.$myMethod = function(methodOptions) {
    // de la logique de code...
  };
};
