<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent.vue";

export default {
  name: "App",
  components: {
    MyComponent,
  },
};
</script>

<style></style>
