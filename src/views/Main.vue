<template>
  <div>
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <h2 class="center">{{ section }}</h2>
        <section
          class="entry"
          :style="`--data-img: url(${entry.banner})`"
          v-for="entry in entries[section]"
          :key="entry.id"
          @click="$router.push({ name: entry.id })"
        >
          <span class="title bubbly-text">{{ entry.title }}</span>
          <span class="date bubbly-text">{{ entry.date }}</span>
          <span class="subtitle bubbly-text">{{ entry.description }}</span>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import BLOG_ENTRIES from "@/static/blogs.json";

export default {
  name: "HelloWorld",
  computed: {
    entries() {
      return BLOG_ENTRIES;
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}

.entry {
  cursor: pointer;
  background-image: var(--data-img);
  background-size: cover;
  min-width: 25rem;
  min-height: 25rem;
  position: relative;
}

.bubbly-text {
  border-radius: 3px;
  padding: 0 0.5rem;
}

.title {
  color: #42b883;
  background: var(--black);
  position: absolute;
  left: 10%;
  bottom: 3rem;
}

.subtitle {
  color: white;
  background: var(--black);
  position: absolute;
  left: 10%;
  bottom: 1rem;
}

.date {
  color: var(--black);
  font-weight: normal;
  position: absolute;
  background: var(--lime);
  right: 5%;
  bottom: 2%;
}

.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}

.group {
  margin-bottom: 4rem;
}
</style>
