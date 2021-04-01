<template>
  <BlogList filterField="type" filterValue="video" />
</template>

<script>
export default {
  name: "Videos",
  computed: {},
  components: { BlogList: () => import("@/components/bloglist/BlogList") },
};
</script>

<style scoped>
</style>