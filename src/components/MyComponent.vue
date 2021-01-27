<template>
  <div>
    <p v-highlight="'yellow'">Highlight this text bright yellow</p>
  </div>
</template>

<script>
import { MyMixin } from "../mixins/MyMixin";

export default {
  mixins: [MyMixin],
  name: "MyComponent",
  //Ordre de priorite
  created() {
    //console.log("Affichage du message apres le mixin");
  },
  //Gestion des conflits de nom de propriete
  // data() {
  //   return {
  //     message: "I take priority.",
  //   };
  // },
  // gestion des conflits de nom de methode
  methods: {
    // hello() {
    //   console.log("Hello from the component.");
    // },
  },
};
</script>

<style scoped></style>
