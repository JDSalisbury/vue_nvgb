<template>
  <BlogList filterField="type" filterValue="podcast" />
</template>

<script>
export default {
  name: "Podcasts",
  computed: {},
  components: { BlogList: () => import("@/components/bloglist/BlogList") },
};
</script>

<style scoped>
</style>