<template>
  <div>
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <template v-if="sectionHasContent(entries[section])">
          <h2 class="center">{{ section }}</h2>
          <template v-for="entry in entries[section]">
            <section
              class="entry"
              :style="`--data-img: url(${entry.banner})`"
              :key="entry.id"
              v-if="filterList(entry)"
              @click="$router.push({ name: entry.id })"
            >
              <span class="title bubbly-text">{{ entry.title }}</span>
              <span class="date bubbly-text">{{ entry.date }}</span>
              <span class="subtitle bubbly-text">{{ entry.description }}</span>
            </section>
            <br :key="entry.id" />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import BLOG_ENTRIES from "@/static/blogs.json";

export default {
  name: "HelloWorld",
  props: { filterField: "", filterValue: "" },
  computed: {
    entries() {
      return BLOG_ENTRIES;
    },
  },
  methods: {
    filterList(entry) {
      if (this.filterField) {
        return entry[this.filterField] == this.filterValue;
      }
      return true;
    },
    sectionHasContent(items) {
      console.log(items);
      return true;
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
