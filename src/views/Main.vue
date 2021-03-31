<template>
  <div>
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <h2 class="center">{{ section }}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({ name: entry.id })">
              <img alt="banner-image" :src="entry.banner" />
              {{ entry.title }}
              <span class="subtitle">{{ entry.date }}</span>
            </h3>
            <p>{{ entry.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/static/blogs.json";

export default {
  name: "HelloWorld",
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
}
img {
  display: block;
  margin: 0 auto;
  width: 510px;
}
h2 {
  color: #35495e;
  text-transform: capitalize;
  margin-bottom: 2rem;
}
h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
}
.subtitle {
  color: grey;
  font-size: 0.98rem;
  float: right;
  font-weight: normal;
}
p {
  margin-top: 0.4rem;
}
.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}
.section {
  margin-bottom: 3rem;
}
.group {
  margin-bottom: 4rem;
}
</style>
