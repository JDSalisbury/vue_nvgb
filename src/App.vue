<template>
  <div id="app">
    <v-app-bar color="deep-purple accent-4" dense>
      <v-toolbar-title>
        <img
          style="width: 50%; padding-top: 8px"
          alt="Blog name"
          src="./assets/nvgb.png"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link to="/">
        <img
          style="width: 50px; padding-top: 40px"
          alt="Vue logo"
          src="./assets/chicken.png"
        />
      </router-link>
    </v-app-bar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
