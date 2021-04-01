<template>
  <BlogList filterField="type" filterValue="blog" />
</template>

<script>
export default {
  name: "Blogs",
  computed: {},
  components: { BlogList: () => import("@/components/bloglist/BlogList") },
};
</script>

<style scoped>
</style>