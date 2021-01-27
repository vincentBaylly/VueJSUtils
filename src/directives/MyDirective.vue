<script>
import Vue from "vue";

Vue.directive("my-directive", {
  bind: function() {
    // faire un travail de préparation
    // par exemple. ajouter des écouteurs d'événements ou des trucs coûteux
    // qui ne doit être exécuté qu'une seule fois
  },
  update: function(newValue, oldValue) {
    // faire quelque chose en fonction de la valeur mise à jour
    // cela sera également appelé pour la valeur initiale
  },
  unbind: function() {
    // do clean up work
    // e.g. remove event listeners added in bind()
  },
});
</script>
