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
        <router-link to="/">
          <img
            style="width: 100px; padding-top: 8px"
            alt="Blog name"
            src="./assets/nvgb.png"
          />
        </router-link>

        <router-link class="nav-link" to="/blogs">
          <v-btn text> BLOGS </v-btn>
        </router-link>
        <router-link class="nav-link" to="/videos">
          <v-btn text> VIDEOS </v-btn>
        </router-link>
        <router-link class="nav-link" to="/podcasts">
          <v-btn text> PODCASTS </v-btn>
        </router-link>
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
          <Footer />
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "app",
  components: { Footer: () => import("@/components/layout/Footer") },
};
</script>

<style scoped>
#app {
  /* Preset colors brazenly stolen from clrs.cc */
  --black: #111;
  --lime: #01ff70;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav-link {
  text-decoration: none;
  padding: 5px;
  color: var(--black);
  font-size: 20px;
  font-family: cursive;
}
</style>
