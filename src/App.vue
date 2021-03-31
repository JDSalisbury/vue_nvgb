<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        dense
      >
        <img
          style="width: 100px; padding-top: 8px"
          alt="Blog name"
          src="./assets/nvgb.png"
        />
        <v-spacer></v-spacer>

        <router-link to="/">
          <img
            style="width: 50px; padding-top: 40px"
            alt="Vue logo"
            src="./assets/chicken.png"
          />
        </router-link>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="100vh"
      >
        <v-container
          style="
            height: 100vh;
            max-width: none !important;
            padding: 0px !important;
          "
        >
          <router-view style="padding-top: 10px" />
          <v-footer dark padless>
            <v-col class="text-center">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
          </v-footer>
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
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
